import { ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/lib/data";

export function PracticeAreas() {
  return (
    <section className="bg-white py-24 sm:py-28" id="areas">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Areas legales</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-navy-950 sm:text-5xl">
            Servicios legales sujetos a confirmacion final con el despacho
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Estas areas se presentan como base provisional para el prototipo y deben validarse antes de publicar.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {practiceAreas.map(({ icon: Icon, title, text }) => (
            <article
              className="group relative overflow-hidden border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-premium"
              key={title}
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 border border-gold-500/20 transition group-hover:translate-x-6 group-hover:-translate-y-6" />
              <Icon className="h-9 w-9 text-gold-600" aria-hidden />
              <h3 className="mt-7 font-serif text-2xl text-navy-950">{title}</h3>
              <p className="mt-3 min-h-20 leading-7 text-slate-600">{text}</p>
              <span className="mt-7 inline-flex h-10 w-10 items-center justify-center border border-slate-200 text-navy-950 transition group-hover:border-gold-500 group-hover:bg-gold-500">
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
