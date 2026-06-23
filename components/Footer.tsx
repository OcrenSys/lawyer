import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contactInfo, navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="section-shell grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <a className="premium-focus inline-flex items-center gap-3" href="#inicio" aria-label="Dr. Juan Gabriel Diaz Rocha">
            <span className="grid h-12 w-12 place-items-center border border-gold-500/70 font-serif text-xl text-gold-500">
              JD
            </span>
            <span>
              <span className="block font-serif text-2xl leading-none">Juan Gabriel Diaz Rocha</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.28em] text-white/55">
                Abogado nicaraguense
              </span>
            </span>
          </a>
          <p className="mt-6 max-w-sm leading-7 text-white/62">
            Defensa, asesoria y representacion legal para personas y empresas, con enfoque profesional, etico y estrategico.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl">Contacto</h3>
          <div className="mt-5 space-y-3 text-sm text-white/65">
            <p className="flex gap-3"><MapPin className="h-4 w-4 text-gold-500" aria-hidden /> {contactInfo.location}</p>
            <p className="flex gap-3"><Phone className="h-4 w-4 text-gold-500" aria-hidden /> {contactInfo.phone}</p>
            <p className="flex gap-3"><Mail className="h-4 w-4 text-gold-500" aria-hidden /> {contactInfo.email}</p>
          </div>
        </div>
        <div>
          <h3 className="font-serif text-xl">Enlaces</h3>
          <div className="mt-5 grid gap-3 text-sm">
            {navItems.slice(0, 6).map((item) => (
              <a className="premium-focus text-white/65 hover:text-gold-500" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-serif text-xl">Redes</h3>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                aria-label={`Red social ${index + 1}`}
                className="premium-focus grid h-10 w-10 place-items-center border border-white/12 text-white/70 transition hover:border-gold-500 hover:text-gold-500"
                href="#contacto"
                key={index}
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-3 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Dr. Juan Gabriel Diaz Rocha. Todos los derechos reservados.</p>
          <p>Prototipo UX/UI para demo comercial.</p>
        </div>
      </div>
    </footer>
  );
}
