import Image from "next/image";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { contactInfo, lawyerPhoto, JudicialComplexCenter } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[860px] bg-navy-950 pt-44 text-white md:min-h-[780px] lg:pt-48">
      <Image
        src={JudicialComplexCenter}
        alt="Complejo judicial en Nicaragua"
        fill
        priority
        className="object-cover object-center opacity-22 blur-[1px] grayscale"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.98)_0%,rgba(7,17,31,0.86)_46%,rgba(7,17,31,0.52)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pearl via-pearl/30 to-transparent" />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Dr. Juan Gabriel Diaz Rocha</p>
          <h1 className="font-serif text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Defensa legal estrategica para proteger sus derechos
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            Representacion juridica profesional basada en experiencia, criterio y compromiso con cada caso.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              className="premium-focus inline-flex items-center justify-center gap-2 rounded-sm bg-gold-500 px-7 py-4 font-semibold text-navy-950 shadow-gold transition hover:bg-white"
              href="#contacto"
            >
              Solicitar consulta
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              className="premium-focus inline-flex items-center justify-center border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-gold-500 hover:text-gold-500"
              href={contactInfo.whatsapp}
            >
              Hablar por WhatsApp
              <MessageCircle className="h-4 w-4 mt-2 mx-2" aria-hidden />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-5 text-sm text-white/65">
            <span className="h-px w-14 bg-gold-500" />
            Licenciado en Derecho por la UPOLI y Master en Derecho Internacional
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:mr-0">
          <div className="absolute -left-6 top-10 h-52 w-52 border border-gold-500/30" />
          <div className="relative overflow-hidden rounded-t-[140px] border border-white/10 bg-white/5 shadow-premium">
            <Image
              src={lawyerPhoto}
              alt="Dr. Juan Gabriel Diaz Rocha"
              width={700}
              height={840}
              className="h-auto w-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Ir a la siguiente seccion"
        className="premium-focus absolute bottom-10 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/15 p-3 text-white/70 transition hover:border-gold-500 hover:text-gold-500 lg:inline-flex"
      >
        <ChevronDown className="h-5 w-5" aria-hidden />
      </a>
    </section>
  );
}
