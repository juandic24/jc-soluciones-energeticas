"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/content/site";

export function Galeria() {
  const fotos = site.galeria;
  const [activo, setActivo] = useState<number | null>(null);

  const cerrar = useCallback(() => setActivo(null), []);
  const anterior = useCallback(
    () => setActivo((i) => (i === null ? i : (i - 1 + fotos.length) % fotos.length)),
    [fotos.length],
  );
  const siguiente = useCallback(
    () => setActivo((i) => (i === null ? i : (i + 1) % fotos.length)),
    [fotos.length],
  );

  useEffect(() => {
    if (activo === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") siguiente();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activo, cerrar, anterior, siguiente]);

  return (
    <section id="galeria" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Nuestros proyectos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Trabajo real, resultados reales
          </h2>
          <p className="mt-4 text-lg text-navy-700">
            Una muestra de instalaciones que hemos realizado. Cada proyecto es una
            historia de energía independiente.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {fotos.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              onClick={() => setActivo(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-200 shadow-sm ring-1 ring-navy-900/5 transition-all hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={`Ampliar: ${foto.alt}`}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-navy-900/0 transition-colors group-hover:bg-navy-900/10" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activo !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={cerrar}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
        >
          <button
            type="button"
            onClick={cerrar}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Cerrar"
          >
            <X className="size-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
            className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Anterior"
          >
            <ChevronLeft className="size-8" />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fotos[activo].src}
              alt={fotos[activo].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              siguiente();
            }}
            className="absolute right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Siguiente"
          >
            <ChevronRight className="size-8" />
          </button>
        </div>
      )}
    </section>
  );
}
