import { faqs } from "@/lib/data";

const inputClass =
  "premium-focus w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-navy-950 placeholder:text-slate-400";

export function FAQContact() {
  return (
    <section className="bg-white py-24 sm:py-28" id="faq">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-navy-950 sm:text-5xl">
            Claridad antes de tomar una decision legal
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <details className="group border border-slate-200 bg-pearl p-6 open:border-gold-500/50" key={faq.question} open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-navy-950">
                  {faq.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-gold-500/50 text-gold-600 group-open:bg-gold-500 group-open:text-navy-950">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <form className="bg-navy-950 p-7 text-white shadow-premium sm:p-10" id="contacto">
          <p className="eyebrow">Consulta gratis</p>
          <h3 className="mt-4 font-serif text-4xl">Enviar solicitud</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-white/78">
              Nombre
              <input className={`${inputClass} mt-2`} name="name" placeholder="Nombre completo" type="text" />
            </label>
            <label className="text-sm font-medium text-white/78">
              Telefono
              <input className={`${inputClass} mt-2`} name="phone" placeholder="+505" type="tel" />
            </label>
            <label className="text-sm font-medium text-white/78">
              Email
              <input className={`${inputClass} mt-2`} name="email" placeholder="correo@ejemplo.com" type="email" />
            </label>
            <label className="text-sm font-medium text-white/78">
              Tipo de caso
              <select className={`${inputClass} mt-2`} name="caseType" defaultValue="">
                <option value="" disabled>
                  Seleccionar
                </option>
                <option>Penal</option>
                <option>Civil</option>
                <option>Mercantil</option>
                <option>Laboral</option>
                <option>Recurso de apelacion</option>
                <option>Consultoria legal</option>
              </select>
            </label>
            <label className="text-sm font-medium text-white/78 sm:col-span-2">
              Mensaje
              <textarea className={`${inputClass} mt-2 min-h-36 resize-y`} name="message" placeholder="Describa brevemente su situacion" />
            </label>
          </div>
          <button
            className="premium-focus mt-6 w-full bg-gold-500 px-6 py-4 font-semibold text-navy-950 transition hover:bg-white"
            type="submit"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  );
}
