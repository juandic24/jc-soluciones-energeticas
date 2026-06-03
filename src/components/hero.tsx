import { Check, Sun } from "lucide-react";
import { WhatsappButton } from "@/components/whatsapp-button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-solar-gradient relative overflow-hidden"
    >
      {/* sol decorativo */}
      <div className="pointer-events-none absolute -right-24 -top-24 hidden h-96 w-96 rounded-full bg-amber-300/40 blur-3xl sm:block" />
      <Sun className="pointer-events-none absolute right-6 top-10 hidden size-40 text-amber-400/30 lg:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800">
            <Sun className="size-4" />
            Energía limpia y renovable
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {site.hero.titulo}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            {site.hero.subtitulo}
          </p>

          <ul className="mt-8 space-y-3">
            {site.hero.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-slate-700">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="size-4" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsappButton size="lg">
              Solicita tu cotización gratis
            </WhatsappButton>
            <a
              href="#galeria"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-sky-200 px-8 text-base font-semibold text-sky-800 transition-colors hover:bg-sky-50"
            >
              Ver proyectos
            </a>
          </div>
        </div>

        {/* tarjeta visual */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-white/70 p-3 shadow-2xl shadow-sky-900/10 ring-1 ring-white/60 backdrop-blur">
            <div className="grid grid-cols-2 gap-3">
              {[
                { n: "100%", l: "Energía solar" },
                { n: "Off-grid", l: "Sin depender de la red" },
                { n: "Camper", l: "& viviendas" },
                { n: "Garantía", l: "Trabajo respaldado" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl bg-gradient-to-br from-sky-50 to-amber-50 p-5 text-center"
                >
                  <div className="text-xl font-bold text-sky-800">{s.n}</div>
                  <div className="mt-1 text-xs font-medium text-slate-500">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
