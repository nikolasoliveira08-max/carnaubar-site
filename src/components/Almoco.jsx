import { images, whatsapp } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

export default function Almoco() {
  return (
    <section id="almoco" className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:items-center md:px-8">
        <div>
          <p className="eyebrow">Almoço</p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium text-cream md:text-5xl">
            O almoço <span className="italic text-gold">também</span> é experiência.
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-cream-dim">
            Entre uma reunião e outra, no encontro com os amigos ou naquele almoço sem pressa, o
            Carnaúbar é o lugar para comer bem e aproveitar o momento.
          </p>

          {/* Espaço reservado para horário, buffet, pratos e valores do almoço. */}
          <div className="mt-6 rounded-xl border border-dashed border-cream/20 bg-ink/40 p-4 text-xs text-cream-dim">
            Em breve: horário do almoço, buffet, pratos e valores.
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.menuart.com.br/pdfs/Carnaubabar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/30 px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Ver cardápio
            </a>
            <a
              href={whatsapp.almoco}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-ink shadow-glow transition-transform hover:scale-105"
            >
              Reservar para o almoço
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <ImagePlaceholder
            src={images.almocoComposicao[0]}
            alt="Prato do almoço no Carnaúbar"
            label="Foto — prato"
            path="/images/almoco/prato-01.jpg"
            className="col-span-2 row-span-2 aspect-square"
          />
          <ImagePlaceholder
            src={images.almocoComposicao[1]}
            alt="Prato do almoço no Carnaúbar"
            label="Foto — prato"
            path="/images/almoco/prato-02.jpg"
            className="aspect-square"
          />
          <ImagePlaceholder
            src={images.almocoComposicao[2]}
            alt="Prato do almoço no Carnaúbar"
            label="Foto — prato"
            path="/images/almoco/prato-03.jpg"
            className="aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
