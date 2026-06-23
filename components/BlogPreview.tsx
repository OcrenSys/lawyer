import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export function BlogPreview() {
  return (
    <section className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Orientacion legal</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-navy-950 sm:text-5xl">
              Contenido educativo para tomar decisiones con mejor informacion
            </h2>
          </div>
          <a className="premium-focus inline-flex items-center gap-2 font-semibold text-navy-950 hover:text-gold-600" href="#contacto">
            Solicitar orientacion
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {blogPosts.map(({ icon: Icon, title, text, tag }) => (
            <article className="group border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold-500 hover:shadow-premium" key={title}>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{tag}</span>
                <Icon className="h-6 w-6 text-gold-600" aria-hidden />
              </div>
              <h3 className="mt-8 font-serif text-2xl leading-snug text-navy-950">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy-950 group-hover:text-gold-600">
                Leer mas
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
