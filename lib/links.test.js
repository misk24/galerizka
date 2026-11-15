import assert from "node:assert/strict";
import test from "node:test";
import { externalLinkProps } from "./links.js";

test("http(s) links open in a new tab safely", () => {
  assert.deepEqual(externalLinkProps("https://wa.link/x"), { target: "_blank", rel: "noopener noreferrer" });
  assert.deepEqual(externalLinkProps("http://example.com"), { target: "_blank", rel: "noopener noreferrer" });
});

test("mailto, anchors, and missing hrefs stay in place", () => {
  for (const href of ["mailto:a@b.co", "#portfolio", "/", undefined]) {
    assert.deepEqual(externalLinkProps(href), {});
  }
});
