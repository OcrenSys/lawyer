import { trustCards } from "@/lib/data";

export function TrustCards() {
  return (
    <section className="relative z-10 -mt-20">
      <div className="section-shell">
        <div className="grid gap-4 md:grid-cols-3">
          {trustCards.map(({ icon: Icon, title, text }) => (
            <article
              className="group border border-navy-950/8 bg-white p-7 shadow-premium transition duration-300 hover:-translate-y-1 hover:border-gold-500/50"
              key={title}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center border border-gold-500/40 text-gold-600 transition group-hover:bg-gold-500 group-hover:text-navy-950">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h2 className="font-serif text-2xl text-navy-950">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
