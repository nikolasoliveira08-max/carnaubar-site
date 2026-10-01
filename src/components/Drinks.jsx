import { drinks, whatsapp } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

export default function Drinks() {
  return (
    <section id="drinks" className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow">Drinks</p>
        <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-medium text-cream md:text-5xl">
          Autênticos até o <span className="italic text-gold">último gole</span>.
        </h2>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream-dim">
          Clássicos, combinações especiais e drinks feitos para deixar a experiência ainda melhor.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {drinks.map((item, i) => (
            <article key={item.id} className="group">
              <div className="overflow-hidden rounded-2xl">
                <ImagePlaceholder
                  src={item.imagem}
                  alt={item.nome}
                  label="Drink a confirmar"
                  path={`/images/drinks/drink-0${i + 1}.jpg`}
                  rounded=""
                  className="aspect-[3/4] w-full transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  imgClassName="aspect-[3/4] w-full transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-medium text-cream">{item.nome}</h3>
              <p className="mt-1 text-[13px] text-cream-dim">{item.descricao}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={whatsapp.generic}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-ink shadow-glow transition-transform hover:scale-105"
          >
            Vem pro Carnaúbar
          </a>
        </div>
      </div>
    </section>
  );
}
