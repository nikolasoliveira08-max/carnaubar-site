import { comidas } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

export default function Comidas() {
  return (
    <section id="gastronomia" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow">Gastronomia</p>
        <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-medium text-cream md:text-5xl">
          Tem coisa que você <span className="italic text-gold">precisa provar</span>.
        </h2>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream-dim">
          Sabores que fazem parte da experiência Carnaúbar.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {comidas.map((item, i) => (
            <article
              key={item.id}
              className="group animate-fadeUp overflow-hidden rounded-2xl border border-cream/10 bg-ink-card shadow-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <ImagePlaceholder
                  src={item.imagem}
                  alt={item.nome}
                  label={item.confirmado ? "Foto do prato" : "Prato a confirmar"}
                  path={`/images/comidas/comida-0${i + 1}.jpg`}
                  rounded=""
                  className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  imgClassName="h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-medium text-cream">{item.nome}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-cream-dim">{item.descricao}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://www.menuart.com.br/pdfs/Carnaubabar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-cream/30 px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Ver cardápio completo
          </a>
        </div>
      </div>
    </section>
  );
}
