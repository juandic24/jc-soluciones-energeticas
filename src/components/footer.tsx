import { FacebookIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <Logo />

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-500 transition-colors hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex size-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 transition-colors hover:bg-sky-100"
        >
          <FacebookIcon className="size-5" />
        </a>
      </div>

      <div className="border-t border-slate-100 py-5">
        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} {site.nombre}. Energía limpia para todos.
        </p>
      </div>
    </footer>
  );
}
