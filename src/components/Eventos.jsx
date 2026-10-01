import { useState } from "react";
import { business, tiposEvento } from "../config/site.js";

const emptyForm = {
  nome: "",
  whatsapp: "",
  tipo: tiposEvento[0],
  data: "",
  pessoas: "",
  mensagem: "",
};

export default function Eventos() {
  const [form, setForm] = useState(emptyForm);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const linhas = [
      "Olá! Gostaria de solicitar um orçamento para um evento no Carnaúbar.",
      `Nome: ${form.nome}`,
      `WhatsApp: ${form.whatsapp}`,
      `Tipo de evento: ${form.tipo}`,
      form.data && `Data desejada: ${form.data}`,
      form.pessoas && `Número estimado de pessoas: ${form.pessoas}`,
      form.mensagem && `Mensagem: ${form.mensagem}`,
    ].filter(Boolean);

    const url = `https://wa.me/${business.phoneE164}?text=${encodeURIComponent(linhas.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="eventos" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Eventos &amp; confraternizações</p>
          <h2 className="mt-5 text-balance font-display text-4xl font-medium text-cream md:text-5xl">
            Do encontro da empresa à <span className="italic text-gold">comemoração</span> com os amigos.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-cream-dim">
            O Carnaúbar também pode ser o espaço do seu próximo evento.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {tiposEvento.map((tipo) => (
            <li
              key={tipo}
              className="rounded-full border border-cream/15 bg-ink-card px-5 py-2.5 text-sm text-cream/85"
            >
              {tipo}
            </li>
          ))}
        </ul>

        <form
          onSubmit={handleSubmit}
          className="mt-14 grid max-w-3xl gap-5 rounded-2xl border border-cream/10 bg-ink-card p-7 shadow-card md:grid-cols-2 md:p-9"
        >
          <div className="md:col-span-2">
            <h3 className="font-display text-xl italic text-gold">Solicitar orçamento</h3>
          </div>

          <Field label="Nome" name="nome" value={form.nome} onChange={handleChange} required />
          <Field label="WhatsApp" name="whatsapp" value={form.whatsapp} onChange={handleChange} required type="tel" />

          <div>
            <label htmlFor="tipo" className="mb-2 block font-body text-xs font-semibold uppercase tracking-wide text-cream-dim">
              Tipo de evento
            </label>
            <select
              id="tipo"
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              className="w-full rounded-lg border border-cream/15 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-gold"
            >
              {tiposEvento.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <Field label="Data desejada" name="data" value={form.data} onChange={handleChange} type="date" />
          <Field label="Número estimado de pessoas" name="pessoas" value={form.pessoas} onChange={handleChange} type="number" min="1" />

          <div className="md:col-span-2">
            <label htmlFor="mensagem" className="mb-2 block font-body text-xs font-semibold uppercase tracking-wide text-cream-dim">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              value={form.mensagem}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-cream/15 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-gold"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold uppercase tracking-wide text-ink shadow-glow transition-transform hover:scale-[1.02] sm:w-auto"
            >
              Quero fazer meu evento
            </button>
            <p className="mt-3 text-xs text-cream-dim">
              Ao enviar, sua solicitação abre diretamente no WhatsApp do Carnaúbar.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, ...props }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-body text-xs font-semibold uppercase tracking-wide text-cream-dim">
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...props}
        className="w-full rounded-lg border border-cream/15 bg-ink px-4 py-3 text-sm text-cream outline-none focus:border-gold"
      />
    </div>
  );
}
