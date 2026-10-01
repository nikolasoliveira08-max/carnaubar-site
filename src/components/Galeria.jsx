import { useState } from "react";
import { business, galeria } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import Lightbox from "./Lightbox.jsx";

// Alterna alturas para dar o efeito masonry sem depender de biblioteca extra.
const spans = ["md:row-span-2", "", "", "md:row-span-2", "", "", "", "md:row-span-2"];

export default function Galeria() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 className="mt-5 max-w-xl text-balance font-display text-4xl font-medium text-cream md:text-5xl">
              Momentos que acontecem <span className="italic text-gold">por aqui</span>.
            </h2>
          </div>
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/30 px-6 py-3 font-body text-xs font-semibold uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Siga {business.instagram.handle}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:auto-rows-[160px] md:grid-cols-4 md:gap-4">
          {galeria.map((item, i) => (
            <button
              type="button"
              key={item.id}
              onClick={() => item.imagem && setLightbox({ src: item.imagem, alt: item.alt })}
              className={`${spans[i % spans.length]} block`}
            >
              <ImagePlaceholder
                src={item.imagem}
                alt={item.alt}
                label="Foto do Instagram"
                path={`/images/galeria/${String(i + 1).padStart(2, "0")}.jpg`}
                className="h-full w-full"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
