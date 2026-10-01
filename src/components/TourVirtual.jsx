import { business, images } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

export default function TourVirtual() {
  return (
    <section id="tour-virtual" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-palm-deep to-ink p-9 md:grid-cols-2 md:items-center md:p-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 py-1.5 pl-2.5 pr-3.5 font-body text-[11px] font-bold uppercase tracking-widest text-gold-soft">
              <span className="h-2 w-2 animate-pulseSoft rounded-full bg-gold" />
              Passeio 360°
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-medium text-cream md:text-5xl">
              Conheça o bar <span className="italic text-gold">por dentro</span>.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream-dim">
              Antes mesmo de chegar, dá pra caminhar pelo Carnaúbar: percorra os dois andares e o
              terraço em um tour virtual 360°, no seu tempo e do seu jeito.
            </p>
            <a
              href={business.tourVirtualUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-ink shadow-glow transition-transform hover:scale-105"
            >
              Iniciar passeio virtual
            </a>
          </div>

          <a
            href={business.tourVirtualUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir passeio virtual 360°"
            className="group relative block overflow-hidden rounded-2xl border border-cream/15"
          >
            <div className="aspect-[16/10]">
              <ImagePlaceholder
                src={images.tourVirtualPreview}
                alt="Prévia do tour virtual 360° do Carnaúbar"
                label="Prévia do tour 360°"
                path="passeiovirtual360.github.io/carnaubar"
                rounded=""
                className="h-full w-full"
                imgClassName="h-full w-full"
              />
            </div>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/40 bg-ink/55 backdrop-blur-sm transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-cream">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
