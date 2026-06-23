import Image from "next/image";
import { ArrowUpRight, GraduationCap, MapPin, Scale } from "lucide-react";
import { attorneys } from "@/lib/data";

export function AttorneySection() {
  const attorney = attorneys[0];

  return (
    <section className="py-24 sm:py-28" id="equipo">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Perfil profesional</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-navy-950 sm:text-5xl">
              Perfil profesional verificado para la marca personal
            </h2>
          </div>
          <a className="premium-focus inline-flex items-center gap-2 font-semibold text-navy-950 hover:text-gold-600" href="#contacto">
            Coordinar consulta
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="mt-14 grid overflow-hidden bg-white shadow-premium lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative min-h-[520px] bg-navy-900">
            <Image
              src={attorney.image}
              alt={attorney.name}
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="p-8 sm:p-10 lg:p-12">
            <h3 className="font-serif text-4xl text-navy-950">{attorney.name}</h3>
            <p className="mt-3 text-lg text-slate-600">{attorney.specialty}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Formacion", "Licenciado en Derecho por la Universidad Politecnica de Nicaragua (UPOLI).", GraduationCap],
                ["Especializacion", "Master en Derecho Internacional y formacion en medios de impugnacion.", Scale],
                ["Ubicacion", "Presencia profesional identificada en Managua y actividad juridica nacional.", MapPin],
                ["Enfoque", "Defensa, asesoria y representacion legal para personas y empresas.", ArrowUpRight]
              ].map(([title, text, Icon]) => (
                <div className="border border-slate-200 p-5" key={title as string}>
                  <Icon className="h-6 w-6 text-gold-600" aria-hidden />
                  <p className="mt-4 font-serif text-xl text-navy-950">{title as string}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
