import { whatsapp } from "../config/site.js";

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-cream/10 bg-ink/95 backdrop-blur-md md:hidden">
      <a
        href="#gastronomia"
        className="flex items-center justify-center gap-2 border-r border-cream/10 py-4 font-body text-xs font-semibold uppercase tracking-wide text-cream"
      >
        Cardápio
      </a>
      <a
        href={whatsapp.reservar}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gold py-4 font-body text-xs font-semibold uppercase tracking-wide text-ink"
      >
        Reservar
      </a>
    </div>
  );
}
