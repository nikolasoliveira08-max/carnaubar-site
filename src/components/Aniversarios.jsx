import { beneficiosAniversario, images, notaBeneficiosAniversario, whatsapp } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

export default function Aniversarios() {
  return (
    <section id="aniversario" className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:items-center md:px-8">
        <ImagePlaceholder
          src={images.aniversario}
          alt="Comemoração de aniversário no Carnaúbar"
          label="Foto — comemoração"
          path="/images/aniversario/destaque.jpg"
          className="aspect-[4/5] order-2 md:order-1"
        />

        <div className="order-1 md:order-2">
          <p className="eyebrow">Aniversário</p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium text-cream md:text-5xl">
            Esse ano, comemore no <span className="italic text-gold">Carnaúbar</span>.
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-cream-dim">
            Chame os amigos e deixe o resto com a gente. Um ambiente completo para transformar
            seu aniversário em uma experiência especial.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4">
            {beneficiosAniversario.map((b) => (
              <li
                key={b.titulo}
                className="rounded-xl border border-cream/10 bg-ink/40 p-4"
              >
                <span className="text-xl" aria-hidden="true">{b.icone}</span>
                <p className="mt-2 font-body text-sm font-semibold text-cream">{b.titulo}</p>
                <p className="mt-1 text-xs text-cream-dim">{b.descricao}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] italic text-cream-dim/70">*{notaBeneficiosAniversario}</p>

          <a
            href={whatsapp.aniversario}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block w-full rounded-full bg-gold px-8 py-4 text-center font-body text-sm font-semibold uppercase tracking-wide text-ink shadow-glow transition-transform hover:scale-105 sm:w-auto"
          >
            Quero comemorar meu aniversário
          </a>
        </div>
      </div>
    </section>
  );
}
