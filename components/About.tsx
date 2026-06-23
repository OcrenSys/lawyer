import Image from "next/image";
import { lawyerPhoto } from "@/lib/data";

export function About() {
  return (
    <section className="py-24 sm:py-28" id="sobre-mi">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute -bottom-5 -right-5 h-full w-full border border-gold-500/35" />
          <Image
            src={lawyerPhoto}
            alt="Retrato profesional del abogado principal"
            width={650}
            height={760}
            className="relative aspect-[13/15] w-full object-cover object-top shadow-premium"
          />
        </div>
        <div>
          <p className="eyebrow">Sobre mi</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-navy-950 sm:text-5xl">
            Trayectoria, criterio y compromiso legal
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            El Dr. Juan Gabriel Diaz Rocha es abogado nicaraguense con formacion en Derecho y estudios
            especializados en Derecho Internacional. Su practica profesional se enfoca en brindar asesoria juridica,
            representacion legal y acompanamiento estrategico para personas y empresas que requieren soluciones
            legales claras y efectivas.
          </p>
          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Su enfoque combina conocimiento juridico, analisis tecnico y atencion personalizada para cada cliente,
            permitiendo disenar estrategias ajustadas a las necesidades particulares de cada situacion.
          </p>
          <div className="mt-8 border-l-2 border-gold-500 pl-6">
            <p className="font-serif text-3xl text-navy-950">Dr. Juan Gabriel Diaz Rocha</p>
            <p className="mt-1 text-sm uppercase tracking-[0.22em] text-slate-500">
              Abogado nicaraguense | Master en Derecho Internacional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
