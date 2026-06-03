import { Sun, Leaf, Zap } from "lucide-react";
import { site } from "@/content/site";

export function SobreNosotros() {
  const { titulo, parrafos } = site.sobreNosotros;
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Ilustración */}
        <div className="order-last lg:order-first">
          <div className="bg-solar-gradient relative flex aspect-square max-w-md items-center justify-center overflow-hidden rounded-3xl shadow-xl ring-1 ring-sky-100 lg:mx-0">
            <Sun className="size-48 text-amber-400" strokeWidth={1.2} />
            <Leaf className="absolute bottom-10 left-10 size-16 text-emerald-500/80" />
            <Zap className="absolute right-12 top-12 size-12 text-sky-500/70" />
          </div>
        </div>

        {/* Texto */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Quiénes somos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {titulo}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
            {parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
            <Leaf className="size-4" />
            Comprometidos con el medio ambiente
          </div>
        </div>
      </div>
    </section>
  );
}
