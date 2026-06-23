import { metrics } from "@/lib/data";

export function Metrics() {
  return (
    <section className="bg-gold-500 py-10">
      <div className="section-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          return (
            <div className="border border-navy-950/15 bg-white/14 p-6 text-center" key={metric.label}>
              <p className="font-serif text-4xl text-navy-950">{metric.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-navy-950/72">
                {metric.label}
              </p>
              <p className="mt-2 text-xs font-semibold text-navy-950/50">{metric.note}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
