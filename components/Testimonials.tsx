import { ClipboardCheck } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-navy-900 py-24 text-white sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Antes de publicar</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Informacion pendiente para completar la version oficial
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article className="border border-white/10 bg-white/[0.04] p-7 transition hover:border-gold-500/60" key={item.name}>
              <ClipboardCheck className="h-9 w-9 text-gold-500" aria-hidden />
              <p className="mt-7 leading-8 text-white/78">{item.quote}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-serif text-xl">{item.name}</p>
                <p className="mt-1 text-sm text-white/50">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
