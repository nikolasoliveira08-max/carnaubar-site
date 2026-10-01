import { images, whatsapp } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

const opcoes = [
  { titulo: "Almoço", cta: "Reservar", href: whatsapp.almoco },
  { titulo: "Happy Hour", cta: "Reservar", href: whatsapp.happyHour },
  { titulo: "Aniversário", cta: "Comemorar", href: whatsapp.aniversario },
  { titulo: "Evento", cta: "Solicitar orçamento", href: "#eventos", internal: true },
];

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={images.ctaFinal}
          alt="Carnaúbar cheio de gente"
          label="Foto — casa cheia"
          path="/images/cta-final.jpg"
          rounded=""
          className="h-full w-full"
          imgClassName="h-full w-full"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <h2 className="text-balance font-display text-4xl font-medium text-cream md:text-6xl">
          Qual vai ser seu <span className="italic text-gold">próximo momento</span> no Carnaúbar?
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {opcoes.map((op) => (
            <a
              key={op.titulo}
              href={op.href}
              target={op.internal ? undefined : "_blank"}
              rel={op.internal ? undefined : "noopener noreferrer"}
              className="group rounded-2xl border border-cream/15 bg-ink/50 p-6 backdrop-blur-sm transition-colors hover:border-gold"
            >
              <p className="font-display text-xl italic text-cream">{op.titulo}</p>
              <span className="mt-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wide text-gold">
                {op.cta}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
