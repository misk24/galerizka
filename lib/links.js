export const isExternal = (href = "") => /^https?:\/\//.test(href);

// Hanya tautan http(s) yang dibuka di tab baru; mailto:, tel:, dan #anchor tidak.
export const externalLinkProps = (href) =>
  isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
