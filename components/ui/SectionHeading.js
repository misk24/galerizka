// Eyebrow + judul (+ paragraf pembuka opsional). Perataan diatur lewat className.
export default function SectionHeading({ eyebrow, title, children, dark = false, className = "" }) {
  return (
    <div className={className}>
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${dark ? "text-dusty-rose" : "text-mulberry-deep"}`}>
        {eyebrow}
      </p>
      <h2 className={`${children ? "mb-4" : ""} ${dark ? "text-blush-soft" : ""}`}>{title}</h2>
      {children && <p className={dark ? "text-blush-soft" : undefined}>{children}</p>}
    </div>
  );
}
