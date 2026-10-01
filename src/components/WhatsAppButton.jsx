import { whatsapp } from "../config/site.js";

/**
 * Botão flutuante de WhatsApp, visível durante toda a navegação.
 * Usa a mensagem genérica por padrão; passe `context` de outro CTA
 * (ex. "aniversario") se quiser reaproveitar este componente em outro lugar.
 */
export default function WhatsAppButton({ context = "generic" }) {
  const link = whatsapp[context] || whatsapp.generic;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform hover:scale-105 md:bottom-6"
    >
      <span className="absolute inset-0 animate-pulseSoft rounded-full bg-[#25D366]/40" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.44L4 29l7.72-1.75a12 12 0 004.3.8h.01c6.62 0 12.02-5.4 12.02-12.03C28.05 8.4 22.65 3 16.02 3zm0 21.9a9.9 9.9 0 01-5.05-1.38l-.36-.21-4.58 1.04 1.06-4.46-.24-.38a9.87 9.87 0 01-1.51-5.29c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 012.9 7.01c0 5.46-4.45 9.9-9.9 9.9zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.06 2.87 1.2 3.07.15.2 2.09 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
