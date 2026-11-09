import assert from "node:assert/strict";
import test from "node:test";
import { contactSchema } from "./schema.js";

const validContact = {
  name: "Mail",
  email: "mail@example.com",
  subject: "Halo",
  message: "Pesan percobaan",
  website: "",
};

test("accepts a valid contact payload", () => {
  const result = contactSchema.safeParse(validContact);
  assert.equal(result.success, true);
});

test("trims whitespace and defaults an omitted subject", () => {
  const result = contactSchema.safeParse({
    name: "  Mail  ",
    email: "  mail@example.com  ",
    message: "  Isi pesan  ",
  });

  assert.equal(result.success, true);
  assert.deepEqual(result.data, {
    name: "Mail",
    email: "mail@example.com",
    subject: "",
    message: "Isi pesan",
  });
});

test("rejects empty names and messages", () => {
  for (const payload of [
    { ...validContact, name: "   " },
    { ...validContact, message: "   " },
  ]) {
    assert.equal(contactSchema.safeParse(payload).success, false);
  }
});

test("rejects invalid email addresses", () => {
  assert.equal(
    contactSchema.safeParse({ ...validContact, email: "not-an-email" }).success,
    false
  );
});

test("enforces maximum field lengths", () => {
  const cases = [
    { name: "n".repeat(101) },
    { email: `${"a".repeat(243)}@example.com` },
    { subject: "s".repeat(151) },
    { message: "m".repeat(5001) },
  ];

  for (const override of cases) {
    assert.equal(
      contactSchema.safeParse({ ...validContact, ...override }).success,
      false
    );
  }
});

test("accepts honeypot values so the route can silently reject spam", () => {
  assert.equal(
    contactSchema.safeParse({ ...validContact, website: "" }).success,
    true
  );
  assert.equal(
    contactSchema.safeParse({ ...validContact, website: "https://spam.test" }).success,
    true
  );
});

test("rejects unexpected payload properties", () => {
  assert.equal(
    contactSchema.safeParse({ ...validContact, isAdmin: true }).success,
    false
  );
});
