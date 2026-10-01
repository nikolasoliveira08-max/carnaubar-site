import { images, whatsapp } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

const destaques = ["Almoço", "Happy Hour", "Drinks", "Eventos"];

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={images.hero}
          alt="Ambiente do Carnaúbar Bar e Restaurante"
          label="Foto/vídeo de fundo — Carnaúbar"
          path="/images/hero.jpg"
          rounded=""
          className="h-full w-full"
          imgClassName="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
        <p className="eyebrow animate-fadeUp text-gold-soft">Vila Congonhas · São Paulo</p>

        <h1 className="mt-5 max-w-4xl animate-fadeUp text-balance font-display text-[2.6rem] font-medium leading-[1.05] text-cream [animation-delay:120ms] md:text-7xl">
          Tem sempre um motivo para viver o{" "}
          <span className="italic text-gold">Carnaúbar</span>.
        </h1>

        <p className="mt-6 max-w-xl animate-fadeUp text-lg text-cream-dim [animation-delay:220ms]">
          Do almoço ao Happy Hour. Do primeiro drink à última comemoração.
        </p>

        <div className="mt-9 flex animate-fadeUp flex-wrap gap-4 [animation-delay:320ms]">
          <a
            href={whatsapp.reservar}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-ink shadow-glow transition-transform hover:scale-105"
          >
            Reservar uma mesa
          </a>
          <a
            href="#espaco"
            className="rounded-full border border-cream/30 px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Conhecer o Carnaúbar
          </a>
        </div>

        <ul className="mt-12 flex animate-fadeUp flex-wrap gap-x-8 gap-y-3 [animation-delay:420ms]">
          {destaques.map((item, i) => (
            <li key={item} className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-cream/70">
              {item}
              {i < destaques.length - 1 && <span className="text-gold">•</span>}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#experiencias"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 md:flex"
      >
        <span className="h-9 w-[1px] animate-pulseSoft bg-cream/50" />
      </a>
    </section>
  );
}
