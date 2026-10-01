import { useState } from "react";
import { images } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import Lightbox from "./Lightbox.jsx";

const andares = [
  {
    id: "andar1",
    numero: "01",
    nome: "Primeiro andar",
    data: images.espacos.andar1,
    principalLabel: "Foto grande — primeiro andar",
    principalPath: "/images/andar-1.jpg",
    // Espaço para descrição futura do ambiente.
    descricao: "Descrição do primeiro andar a ser adicionada.",
  },
  {
    id: "andar2",
    numero: "02",
    nome: "Segundo andar",
    data: images.espacos.andar2,
    principalLabel: "Foto grande — segundo andar",
    principalPath: "/images/andar-2.jpg",
    descricao: "Descrição do segundo andar a ser adicionada.",
  },
];

export default function Espacos() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="espaco" className="bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow">O espaço</p>
        <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-medium text-cream md:text-5xl">
          Dois andares. <span className="italic text-gold">Uma experiência</span> completa.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream-dim">
          Espaços diferentes para diferentes momentos. Conheça cada canto do Carnaúbar e escolha
          onde começa sua próxima história.
        </p>

        <div className="mt-16 flex flex-col gap-20">
          {andares.map((andar) => (
            <div key={andar.id}>
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-display text-3xl italic text-gold">{andar.numero}</span>
                <h3 className="font-display text-2xl font-medium text-cream">{andar.nome}</h3>
              </div>

              <button
                type="button"
                onClick={() => andar.data.principal && setLightbox({ src: andar.data.principal, alt: andar.nome })}
                className="block w-full text-left"
              >
                <ImagePlaceholder
                  src={andar.data.principal}
                  alt={andar.nome}
                  label={andar.principalLabel}
                  path={andar.principalPath}
                  className="aspect-[16/8] w-full"
                />
              </button>

              <p className="mt-4 max-w-2xl text-sm text-cream-dim">{andar.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
