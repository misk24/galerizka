import assert from "node:assert/strict";
import test from "node:test";
import { spawnSync } from "node:child_process";

process.env.RESEND_API_KEY = "re_test_contact_route";
process.env.CONTACT_FROM_EMAIL = "contact@galerizka.example";
process.env.CONTACT_TO_EMAIL = "owner@galerizka.example";
process.env.KV_REST_API_URL = "https://redis.example.test";
process.env.KV_REST_API_TOKEN = "redis_test_token";

const { POST } = await import("./route.js");

const validPayload = {
  name: "Pengunjung",
  email: "visitor@example.com",
  subject: "Pertanyaan",
  message: "Saya ingin bertanya tentang layanan jahit.",
  website: "",
};

function createRequest(payload, headers = {}) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-real-ip": "203.0.113.10",
      ...headers,
    },
    body: typeof payload === "string" ? payload : JSON.stringify(payload),
  });
}

async function runWithFetch(mockFetch, callback) {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = mockFetch;
  try {
    await callback();
  } finally {
    globalThis.fetch = originalFetch;
  }
}

function successfulFetch(calls = []) {
  return async (url, options) => {
    calls.push({ url: String(url), options });
    if (String(url) === process.env.KV_REST_API_URL) {
      return new Response(JSON.stringify({ result: [1, 600] }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ id: "email_test_123" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };
}

test("loads the contact route when the Resend API key is missing", () => {
  const result = spawnSync(
    process.execPath,
    [
      "--input-type=module",
      "-e",
      "delete process.env.RESEND_API_KEY; await import('./app/api/contact/route.js');",
    ],
    { encoding: "utf8" }
  );

  assert.equal(result.status, 0, result.stderr);
});

test("returns 415 for unsupported content types", async () => {
  const response = await POST(
    createRequest(validPayload, { "content-type": "text/plain" })
  );
  assert.equal(response.status, 415);

  const jsonpResponse = await POST(
    createRequest(validPayload, { "content-type": "application/jsonp" })
  );
  assert.equal(jsonpResponse.status, 415);
});

test("rejects a declared oversized body before calling the rate limiter", async () => {
  let fetchCalled = false;
  await runWithFetch(async () => {
    fetchCalled = true;
    return new Response(JSON.stringify({ result: [1, 600] }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }, async () => {
    const response = await POST(createRequest(validPayload, { "content-length": "16385" }));
    assert.equal(response.status, 413);
    assert.equal(fetchCalled, false);
  });
});

test("returns 413 when the request body exceeds 16 KiB", async () => {
  await runWithFetch(successfulFetch(), async () => {
    const response = await POST(createRequest("x".repeat(16_385)));
    assert.equal(response.status, 413);
  });
});

test("returns 400 for malformed JSON and invalid payloads", async () => {
  await runWithFetch(successfulFetch(), async () => {
    const malformed = await POST(createRequest("{"));
    assert.equal(malformed.status, 400);

    const invalid = await POST(createRequest({ ...validPayload, email: "invalid" }));
    assert.equal(invalid.status, 400);
  });
});

test("returns success for honeypot submissions without sending email", async () => {
  const calls = [];
  await runWithFetch(successfulFetch(calls), async () => {
    const response = await POST(
      createRequest({ ...validPayload, website: "https://spam.example" })
    );
    assert.equal(response.status, 200);
    assert.equal(calls.some((call) => call.url.includes("api.resend.com")), false);
  });
});

test("sends valid contact submissions through Resend", async () => {
  const calls = [];
  await runWithFetch(successfulFetch(calls), async () => {
    const response = await POST(createRequest(validPayload));
    assert.equal(response.status, 200);
    assert.equal(calls.some((call) => call.url.includes("api.resend.com")), true);
  });
});

test("returns 429 when the rate limit is exceeded", async () => {
  await runWithFetch(async () => new Response(
    JSON.stringify({ result: [6, 420] }),
    { status: 200, headers: { "content-type": "application/json" } }
  ), async () => {
    const response = await POST(createRequest(validPayload));
    assert.equal(response.status, 429);
    assert.equal(response.headers.get("retry-after"), "420");
  });
});

test("fails closed with 503 when Redis is unavailable", async () => {
  await runWithFetch(async () => new Response("unavailable", { status: 503 }), async () => {
    const response = await POST(createRequest(validPayload));
    assert.equal(response.status, 503);
  });
});

test("returns 502 when Resend rejects the email", async () => {
  await runWithFetch(async (url) => {
    if (String(url) === process.env.KV_REST_API_URL) {
      return new Response(JSON.stringify({ result: [1, 600] }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ message: "Rejected" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }, async () => {
    const response = await POST(createRequest(validPayload));
    assert.equal(response.status, 502);
  });
});

test("returns 503 when contact email addresses are not configured", async () => {
  const originalFrom = process.env.CONTACT_FROM_EMAIL;
  const originalTo = process.env.CONTACT_TO_EMAIL;
  delete process.env.CONTACT_FROM_EMAIL;
  delete process.env.CONTACT_TO_EMAIL;
  try {
    const response = await POST(createRequest(validPayload));
    assert.equal(response.status, 503);
  } finally {
    process.env.CONTACT_FROM_EMAIL = originalFrom;
    process.env.CONTACT_TO_EMAIL = originalTo;
  }
});

test("returns 503 when contact email settings contain only whitespace", async () => {
  const originalFrom = process.env.CONTACT_FROM_EMAIL;
  const originalTo = process.env.CONTACT_TO_EMAIL;
  process.env.CONTACT_FROM_EMAIL = "   ";
  process.env.CONTACT_TO_EMAIL = "\\t";
  try {
    const response = await POST(createRequest(validPayload));
    assert.equal(response.status, 503);
  } finally {
    process.env.CONTACT_FROM_EMAIL = originalFrom;
    process.env.CONTACT_TO_EMAIL = originalTo;
  }
});

test("returns 503 when the email provider key is missing", async () => {
  const originalKey = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  try {
    const response = await POST(createRequest(validPayload));
    assert.equal(response.status, 503);
  } finally {
    process.env.RESEND_API_KEY = originalKey;
  }
});
