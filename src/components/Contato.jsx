import { business, whatsapp } from "../config/site.js";

const rows = [
  {
    label: "Endereço",
    value: business.address.full,
    href: business.mapsDirectionsUrl,
    external: true,
  },
  {
    label: "Telefone",
    value: business.phoneDisplay,
    href: `tel:+${business.phoneE164}`,
  },
  {
    label: "WhatsApp",
    value: business.phoneDisplay,
    href: whatsapp.generic,
    external: true,
  },
  {
    label: "Instagram",
    value: `${business.instagram.handle} — ${business.instagram.followers} seguidores`,
    href: business.instagram.url,
    external: true,
  },
  {
    label: "Tour virtual",
    value: "Ver em 360°",
    href: business.tourVirtualUrl,
    external: true,
  },
  {
    label: "Horário",
    value: business.hours.confirmed,
  },
  {
    label: "Cardápio",
    value: "Ver PDF completo",
    href: "https://www.menuart.com.br/pdfs/Carnaubabar",
    external: true,
  },
];

export default function Contato() {
  return (
    <section id="contato" className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="eyebrow">Contato &amp; localização</p>
          <h2 className="mt-5 font-display text-4xl font-medium text-cream md:text-5xl">
            {business.fullName}
          </h2>
          <p className="mt-3 text-sm text-cream-dim">
            {business.address.street} — {business.address.neighborhood}, {business.address.city}/{business.address.state}
          </p>

          <dl className="mt-10 grid gap-5">
            {rows.map((row) => (
              <div key={row.label} className="flex items-start justify-between gap-4 border-b border-cream/10 pb-4">
                <dt className="font-body text-xs font-semibold uppercase tracking-wide text-cream-dim">
                  {row.label}
                </dt>
                <dd className="text-right text-sm text-cream">
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.external ? "_blank" : undefined}
                      rel={row.external ? "noopener noreferrer" : undefined}
                      className="transition-colors hover:text-gold"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={business.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-ink shadow-glow transition-transform hover:scale-105"
          >
            Como chegar
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-cream/10 shadow-card">
          <iframe
            title="Mapa — Carnaúbar Bar e Restaurante"
            src="https://www.google.com/maps?q=R.+Baronesa+de+Bela+Vista,+750+-+Vila+Congonhas,+S%C3%A3o+Paulo+-+SP,+04612-002&output=embed"
            className="h-full min-h-[420px] w-full grayscale-[15%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
