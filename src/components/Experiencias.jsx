import { images, whatsapp } from "../config/site.js";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

const cards = [
  {
    id: "almoco",
    titulo: "Seu almoço merece sair da rotina.",
    texto: "Boa comida, ambiente agradável e aquele momento para desacelerar no meio do dia.",
    cta: "Conhecer o almoço",
    href: "#almoco",
    imagem: images.experiencias.almoco,
    label: "Foto — almoço / comidas",
    path: "/images/experiencias/almoco.jpg",
  },
  {
    id: "happy-hour",
    titulo: "O expediente acaba. O Carnaúbar começa.",
    texto: "Junte a galera, peça seu drink e transforme o fim do dia em uma experiência muito melhor.",
    cta: "Quero curtir o Happy Hour",
    href: "#happy-hour",
    imagem: images.experiencias.happyHour,
    label: "Foto — drinks, amigos, ambiente",
    path: "/images/experiencias/happy-hour.jpg",
  },
  {
    id: "aniversario",
    titulo: "Seu aniversário merece um lugar à altura.",
    texto: "Reúna seus amigos, comemore do seu jeito e transforme seu aniversário em uma noite para lembrar.",
    cta: "Comemorar meu aniversário",
    href: whatsapp.aniversario,
    external: true,
    imagem: images.experiencias.aniversario,
    label: "Foto — comemoração no bar",
    path: "/images/experiencias/aniversario.jpg",
  },
  {
    id: "eventos",
    titulo: "Seu evento acontece aqui.",
    texto: "Confraternizações, encontros, eventos corporativos e celebrações em um ambiente feito para receber.",
    cta: "Fazer meu evento",
    href: "#eventos",
    imagem: images.experiencias.eventos,
    label: "Foto — grupos / eventos",
    path: "/images/experiencias/eventos.jpg",
  },
];

export default function Experiencias() {
  return (
    <section id="experiencias" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow">A experiência Carnaúbar</p>
        <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-medium text-cream md:text-5xl">
          Um lugar. <span className="italic text-gold">Vários motivos</span> para voltar.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-ink-card shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImagePlaceholder
                  src={card.imagem}
                  alt={card.titulo}
                  label={card.label}
                  path={card.path}
                  rounded=""
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  imgClassName="h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="text-balance font-display text-2xl font-medium text-cream">
                  {card.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">{card.texto}</p>
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wide text-gold transition-colors group-hover:text-gold-soft"
                >
                  {card.cta}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
