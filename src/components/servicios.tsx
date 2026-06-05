import { site } from "@/content/site";

export function Servicios() {
  return (
    <section id="servicios" className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Soluciones solares a tu medida
          </h2>
          <p className="mt-4 text-lg text-navy-700">
            Diseñamos cada sistema según tu consumo real, ya sea para tu camper o
            para tu vivienda off-grid.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {site.servicios.map((s) => {
            const Icon = s.icono;
            return (
              <div
                key={s.titulo}
                className="group rounded-3xl border border-cream-200 bg-cream-100/60 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 text-amber-400 shadow-lg shadow-navy-900/20 transition-transform group-hover:scale-105">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-900">
                  {s.titulo}
                </h3>
                <p className="mt-3 leading-relaxed text-navy-700">
                  {s.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
