// Judul section (+ paragraf pembuka opsional). Perataan diatur lewat className.
export default function SectionHeading({ title, children, dark = false, className = "" }) {
  return (
    <div className={className}>
      <h2 className={`${children ? "mb-4" : ""} ${dark ? "text-blush-soft" : ""}`}>{title}</h2>
      {children && <p className={dark ? "text-blush-soft" : undefined}>{children}</p>}
    </div>
  );
}
