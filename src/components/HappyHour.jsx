import { images, whatsapp } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

const destaques = [
  { icone: "🍸", label: "Drinks" },
  { icone: "🍻", label: "Cerveja gelada" },
  { icone: "🍽️", label: "Comida" },
  { icone: "🎵", label: "Música" },
  { icone: "👥", label: "Galera reunida" },
];

export default function HappyHour() {
  return (
    <section id="happy-hour" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={images.happyHour}
          alt="Happy Hour no Carnaúbar"
          label="Foto — drinks e pessoas"
          path="/images/happy-hour/destaque.jpg"
          rounded=""
          className="h-full w-full"
          imgClassName="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-xl">
          <p className="eyebrow">Happy Hour</p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium text-cream md:text-5xl">
            Seu Happy Hour tem <span className="italic text-gold">endereço</span>.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-cream-dim">
            Depois do trabalho, antes da noite ou simplesmente porque hoje merece um brinde.
            O Carnaúbar reúne drinks, comida e um ambiente perfeito para encontrar os amigos.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {destaques.map((d) => (
              <li
                key={d.label}
                className="flex items-center gap-2 rounded-full border border-cream/15 bg-ink/50 px-4 py-2 text-sm text-cream/90 backdrop-blur-sm"
              >
                <span aria-hidden="true">{d.icone}</span>
                {d.label}
              </li>
            ))}
          </ul>

          {/* Espaço reservado para promoções e horários específicos do Happy Hour. */}
          <div className="mt-6 rounded-xl border border-dashed border-cream/20 bg-ink/40 p-4 text-xs text-cream-dim">
            Em breve: promoções e horários do Happy Hour.
          </div>

          <a
            href={whatsapp.happyHour}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-ink shadow-glow transition-transform hover:scale-105"
          >
            Reservar Happy Hour
          </a>
        </div>
      </div>
    </section>
  );
}
