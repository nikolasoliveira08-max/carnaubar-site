/**
 * Renderiza a imagem real quando `src` está definido no config/site.js.
 * Enquanto `src` for null, mostra um placeholder identificado com o caminho
 * onde o arquivo deve ser colocado — facilita trocar por fotos reais depois.
 */
export default function ImagePlaceholder({
  src,
  alt = "",
  label,
  path,
  className = "",
  imgClassName = "",
  rounded = "rounded-2xl",
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${rounded} object-cover ${imgClassName || className}`}
      />
    );
  }

  return (
    <div
      className={`${rounded} ${className} relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-cream/25 bg-gradient-to-br from-palm-deep via-ink-card to-ink text-center`}
      role="img"
      aria-label={alt || label}
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(247,237,221,0.35)_1px,transparent_0)] [background-size:16px_16px]" />
      <span className="relative text-2xl">📷</span>
      <span className="relative font-body text-[11px] uppercase tracking-wider text-cream-dim">
        {label}
      </span>
      {path && (
        <code className="relative rounded bg-ink/60 px-2 py-1 text-[10px] text-gold-soft">
          {path}
        </code>
      )}
    </div>
  );
}
