"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { WhatsappButton } from "@/components/whatsapp-button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label={site.nombre}>
          <Logo />
        </a>

        {/* Links escritorio */}
        <div className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <WhatsappButton>WhatsApp</WhatsappButton>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-slate-700 hover:bg-sky-50 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      <div
        className={cn(
          "overflow-hidden border-t border-sky-100 bg-white transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
          <WhatsappButton className="mt-2 w-full">
            Escríbenos por WhatsApp
          </WhatsappButton>
        </div>
      </div>
    </header>
  );
}
