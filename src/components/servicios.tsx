import { site } from "@/content/site";

export function Servicios() {
  return (
    <section id="servicios" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Soluciones solares a tu medida
          </h2>
          <p className="mt-4 text-lg text-slate-600">
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
                className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-600/20 transition-transform group-hover:scale-105">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {s.titulo}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
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
