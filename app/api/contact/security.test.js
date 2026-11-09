import assert from "node:assert/strict";
import test from "node:test";
import { checkRateLimit, escapeHtml } from "./security.js";

test("escapes HTML-sensitive characters", () => {
  assert.equal(
    escapeHtml(`<script>alert("x" & 'y')</script>`),
    "&lt;script&gt;alert(&quot;x&quot; &amp; &#39;y&#39;)&lt;/script&gt;"
  );
});

test("rate limiter fails closed when Redis credentials are missing", async () => {
  const previousUrl = process.env.KV_REST_API_URL;
  const previousToken = process.env.KV_REST_API_TOKEN;
  delete process.env.KV_REST_API_URL;
  delete process.env.KV_REST_API_TOKEN;

  try {
    await assert.rejects(
      checkRateLimit(new Request("https://example.test", {
        headers: { "x-real-ip": "203.0.113.10" },
      })),
      /not configured/
    );
  } finally {
    if (previousUrl === undefined) delete process.env.KV_REST_API_URL;
    else process.env.KV_REST_API_URL = previousUrl;
    if (previousToken === undefined) delete process.env.KV_REST_API_TOKEN;
    else process.env.KV_REST_API_TOKEN = previousToken;
  }
});

test("rate limiter rejects requests without a client IP", async () => {
  const previousUrl = process.env.KV_REST_API_URL;
  const previousToken = process.env.KV_REST_API_TOKEN;
  process.env.KV_REST_API_URL = "https://redis.example.test";
  process.env.KV_REST_API_TOKEN = "test-token";

  try {
    await assert.rejects(
      checkRateLimit(new Request("https://example.test")),
      /Client IP is unavailable/
    );
  } finally {
    if (previousUrl === undefined) delete process.env.KV_REST_API_URL;
    else process.env.KV_REST_API_URL = previousUrl;
    if (previousToken === undefined) delete process.env.KV_REST_API_TOKEN;
    else process.env.KV_REST_API_TOKEN = previousToken;
  }
});

test("rate limiter blocks requests above the configured threshold", async () => {
  const previousUrl = process.env.KV_REST_API_URL;
  const previousToken = process.env.KV_REST_API_TOKEN;
  const previousFetch = globalThis.fetch;
  process.env.KV_REST_API_URL = "https://redis.example.test";
  process.env.KV_REST_API_TOKEN = "test-token";
  let requestBody;

  globalThis.fetch = async (_url, options) => {
    requestBody = JSON.parse(options.body);
    return new Response(JSON.stringify({ result: [6, 120] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };

  try {
    const result = await checkRateLimit(new Request("https://example.test", {
      headers: { "x-real-ip": "203.0.113.10" },
    }));
    assert.deepEqual(result, { allowed: false, retryAfter: 120 });
    assert.equal(requestBody[0], "EVAL");
    assert.equal(requestBody[2], "1");
    assert.equal(requestBody[4], "600");
    assert.match(requestBody[3], /^contact:rate-limit:[a-f0-9]{64}$/);
  } finally {
    globalThis.fetch = previousFetch;
    if (previousUrl === undefined) delete process.env.KV_REST_API_URL;
    else process.env.KV_REST_API_URL = previousUrl;
    if (previousToken === undefined) delete process.env.KV_REST_API_TOKEN;
    else process.env.KV_REST_API_TOKEN = previousToken;
  }
});

test("rate limiter allows requests within the threshold", async () => {
  const previousUrl = process.env.KV_REST_API_URL;
  const previousToken = process.env.KV_REST_API_TOKEN;
  const previousFetch = globalThis.fetch;
  process.env.KV_REST_API_URL = "https://redis.example.test";
  process.env.KV_REST_API_TOKEN = "test-token";
  globalThis.fetch = async () => new Response(
    JSON.stringify({ result: [5, 300] }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );

  try {
    const result = await checkRateLimit(new Request("https://example.test", {
      headers: { "x-forwarded-for": "203.0.113.11, 10.0.0.1" },
    }));
    assert.deepEqual(result, { allowed: true, retryAfter: 300 });
  } finally {
    globalThis.fetch = previousFetch;
    if (previousUrl === undefined) delete process.env.KV_REST_API_URL;
    else process.env.KV_REST_API_URL = previousUrl;
    if (previousToken === undefined) delete process.env.KV_REST_API_TOKEN;
    else process.env.KV_REST_API_TOKEN = previousToken;
  }
});

test("rate limiter rejects malformed Redis responses", async () => {
  const previousUrl = process.env.KV_REST_API_URL;
  const previousToken = process.env.KV_REST_API_TOKEN;
  const previousFetch = globalThis.fetch;
  process.env.KV_REST_API_URL = "https://redis.example.test";
  process.env.KV_REST_API_TOKEN = "test-token";
  globalThis.fetch = async () => new Response(
    JSON.stringify({ result: "unexpected" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );

  try {
    await assert.rejects(
      checkRateLimit(new Request("https://example.test", {
        headers: { "x-real-ip": "203.0.113.12" },
      })),
      /invalid rate-limit response/
    );
  } finally {
    globalThis.fetch = previousFetch;
    if (previousUrl === undefined) delete process.env.KV_REST_API_URL;
    else process.env.KV_REST_API_URL = previousUrl;
    if (previousToken === undefined) delete process.env.KV_REST_API_TOKEN;
    else process.env.KV_REST_API_TOKEN = previousToken;
  }
});
