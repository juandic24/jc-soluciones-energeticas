import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-cream-200 bg-cream-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <Logo />

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-navy-500 transition-colors hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex size-10 items-center justify-center rounded-full bg-navy-900 text-cream-50 transition-colors hover:bg-navy-700"
          >
            <FacebookIcon className="size-5" />
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex size-10 items-center justify-center rounded-full bg-navy-900 text-cream-50 transition-colors hover:bg-navy-700"
          >
            <InstagramIcon className="size-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-cream-200 py-5">
        <p className="text-center text-sm text-navy-500">
          © {new Date().getFullYear()} {site.nombre}. Energía limpia para todos.
        </p>
      </div>
    </footer>
  );
}
