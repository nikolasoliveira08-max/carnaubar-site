import { useEffect, useState } from "react";
import { business, nav, whatsapp } from "../config/site.js";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md border-b border-cream/10"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#inicio"
          className="font-display text-2xl italic tracking-tight text-cream"
        >
          Carna<span className="text-gold not-italic">ú</span>bar
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[13px] font-medium uppercase tracking-wide text-cream/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsapp.reservar}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-6 py-2.5 font-body text-[13px] font-semibold uppercase tracking-wide text-ink shadow-glow transition-transform hover:scale-105"
          >
            Reservar
          </a>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[1.5px] w-6 bg-cream transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-[1.5px] w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-[1.5px] w-6 bg-cream transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* menu mobile */}
      <div
        className={`grid overflow-hidden bg-ink/98 backdrop-blur-md transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t border-cream/10 px-5 py-4">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-sm font-medium uppercase tracking-wide text-cream/85 hover:bg-cream/5 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsapp.reservar}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-gold px-6 py-3 text-center font-body text-sm font-semibold uppercase tracking-wide text-ink"
            >
              Reservar
            </a>
            <a
              href={`tel:+${business.phoneE164}`}
              className="mt-1 rounded-full border border-cream/20 px-6 py-3 text-center font-body text-sm font-semibold uppercase tracking-wide text-cream"
            >
              Ligar {business.phoneDisplay}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
