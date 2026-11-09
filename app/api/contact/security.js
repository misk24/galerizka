const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECONDS = 10 * 60;

export function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

async function getRateLimitKey(req) {
  // Vercel provides x-real-ip for the originating client address.
  const ip =
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  if (!ip) {
    throw new Error("Client IP is unavailable.");
  }

  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(ip)
  );
  const hash = Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return `contact:rate-limit:${hash}`;
}

export async function checkRateLimit(req) {
  const redisUrl = process.env.KV_REST_API_URL;
  const redisToken = process.env.KV_REST_API_TOKEN;

  if (!redisUrl || !redisToken) {
    throw new Error("Redis rate limiting is not configured.");
  }

  const key = await getRateLimitKey(req);
  const script = [
    "local count = redis.call('INCR', KEYS[1])",
    "if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end",
    "local ttl = redis.call('TTL', KEYS[1])",
    "return {count, ttl}",
  ].join("\n");

  const response = await fetch(redisUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redisToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      "EVAL",
      script,
      "1",
      key,
      String(RATE_LIMIT_WINDOW_SECONDS),
    ]),
    cache: "no-store",
    signal: AbortSignal.timeout(3000),
  });

  if (!response.ok) {
    throw new Error(`Redis request failed with status ${response.status}.`);
  }

  const payload = await response.json();
  if (payload.error || !Array.isArray(payload.result)) {
    throw new Error("Redis returned an invalid rate-limit response.");
  }

  const [count, ttl] = payload.result.map(Number);
  if (!Number.isFinite(count) || !Number.isFinite(ttl)) {
    throw new Error("Redis returned invalid rate-limit values.");
  }

  return { allowed: count <= RATE_LIMIT_MAX, retryAfter: Math.max(ttl, 1) };
}
