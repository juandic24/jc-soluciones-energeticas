import { site } from "@/content/site";
import { WhatsappButton } from "@/components/whatsapp-button";

export function Confianza() {
  return (
    <section
      id="confianza"
      className="relative overflow-hidden bg-sky-950 py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            Por qué elegirnos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Confía en quien hace el trabajo bien
          </h2>
          <p className="mt-4 text-lg text-sky-200">
            Sabemos que invertir en energía solar es una decisión importante. Por
            eso trabajamos con total transparencia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.confianza.map((c) => {
            const Icon = c.icono;
            return (
              <div
                key={c.titulo}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-400 text-sky-950">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{c.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-200">
                  {c.descripcion}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <WhatsappButton size="lg">
            Cuéntanos sobre tu proyecto
          </WhatsappButton>
        </div>
      </div>
    </section>
  );
}
