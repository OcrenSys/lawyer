import Image from "next/image";
import { cases } from "@/lib/data";

export function CaseResults() {
  return (
    <section className="bg-navy-950 py-24 text-white sm:py-28" id="casos">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Enfoque de trabajo</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Representacion legal con analisis, estrategia y comunicacion clara
            </h2>
          </div>
          <p className="max-w-3xl leading-8 text-white/68 lg:ml-auto">
            La propuesta se centra en evaluacion tecnica, proteccion de derechos y acompanamiento profesional durante
            cada etapa del proceso.
          </p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article className="group relative min-h-[430px] overflow-hidden bg-navy-950 shadow-premium" key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  saturate-[0.82]
                  contrast-[1.06]
                  brightness-[0.99]
                  backdrop-blur-lg
                  transition
                  duration-700
                  group-hover:saturate-100
                "
                style={{
                  objectPosition: `${item.position.x} ${item.position.y}`,
                  transform: `scale(${item.zoom})`,
                }}

              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.08)_0%,rgba(7,17,31,0.28)_42%,rgba(7,17,31,0.94)_100%)]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute left-0 top-0 h-full w-full bg-gold-500/8 opacity-0 mix-blend-soft-light transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">{item.category}</p>
                <h3 className="mt-3 font-serif text-3xl">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/72">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
