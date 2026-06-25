import { CalendarClock, Facebook, Instagram, Linkedin, Mail, Menu, Phone } from "lucide-react";
import { contactInfo, navItems } from "@/lib/data";

export function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 text-white" id="inicio">
      <div className="border-b border-white/10 bg-navy-950/80 backdrop-blur-md">
        <div className="section-shell flex flex-col gap-3 py-3 text-xs text-white/76 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <a className="premium-focus inline-flex items-center gap-2 hover:text-gold-500" href={contactInfo.phoneHref}>
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {contactInfo.phone}
            </a>
            <a className="premium-focus inline-flex items-center gap-2 hover:text-gold-500" href={contactInfo.emailHref}>
              <Mail className="h-3.5 w-3.5" aria-hidden />
              {contactInfo.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <CalendarClock className="h-3.5 w-3.5 text-gold-500" aria-hidden />
              {contactInfo.schedule}
            </span>
          </div>
          <div className="flex items-center gap-3" aria-label="Redes sociales">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                aria-label={`Red social ${index + 1}`}
                className="premium-focus rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-gold-500"
                href="#contacto"
                key={index}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
      <nav className="bg-navy-900/72 backdrop-blur-xl">
        <div className="section-shell flex min-h-20 items-center justify-between gap-5">
          <a className="premium-focus flex items-center gap-3" href="#inicio" aria-label="Dr. Juan Gabriel Diaz Rocha">
            <span className="grid h-11 w-11 place-items-center border border-gold-500/70 font-serif text-xl text-gold-500">
              JD
            </span>
            <span>
              <span className="block font-serif text-xl leading-none">Juan Gabriel Diaz Rocha</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.28em] text-white/55">
                Abogado nicaraguense
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => (
              <a
                className="premium-focus text-sm font-medium text-white/78 transition hover:text-gold-500"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              className="premium-focus hidden rounded-sm bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-white sm:inline-flex"
              href="#contacto"
            >
              Solicitar consulta
            </a>
            <button
              aria-label="Abrir menu"
              className="premium-focus grid h-11 w-11 place-items-center border border-white/15 text-white xl:hidden"
              type="button"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
