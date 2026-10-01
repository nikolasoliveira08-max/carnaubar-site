import { business, nav, seoKeywordsFooter } from "../config/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#inicio" className="font-display text-2xl italic text-cream">
              Carna<span className="text-gold not-italic">ú</span>bar
            </a>
            <p className="mt-4 max-w-xs text-sm text-cream-dim">{business.address.full}</p>
          </div>

          <nav aria-label="Navegação do site">
            <h3 className="font-body text-xs font-semibold uppercase tracking-wide text-cream-dim">
              Navegação
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-cream/80 hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-wide text-cream-dim">
              Contato
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>
                <a href={`tel:+${business.phoneE164}`} className="hover:text-gold">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={business.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {business.instagram.handle}
                </a>
              </li>
              <li>
                <a href={business.tourVirtualUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  Passeio virtual 360°
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-[11px] leading-relaxed text-cream-dim/70">
          {business.fullName} — {seoKeywordsFooter.join(" · ")}.
        </p>

        <div className="mt-8 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream-dim/70 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {business.fullName}</span>
          <span>Site desenvolvido a partir de informações públicas — dados sujeitos a atualização.</span>
        </div>
      </div>
    </footer>
  );
}
