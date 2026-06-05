import { Mail, MapPin } from "lucide-react";
import { WhatsappButton } from "@/components/whatsapp-button";
import { FacebookIcon } from "@/components/icons";
import { site } from "@/content/site";

export function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-navy-800 to-navy-950 py-20 text-cream-50 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          ¿Listo para tu instalación solar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-navy-200">
          Escríbenos por WhatsApp y cuéntanos sobre tu proyecto. Te asesoramos sin
          compromiso y te damos una cotización a tu medida.
        </p>

        <div className="mt-10 flex justify-center">
          <WhatsappButton size="lg" className="shadow-2xl">
            Escríbenos por WhatsApp
          </WhatsappButton>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-navy-200 sm:flex-row sm:gap-8">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-5 text-amber-400" />
            {site.ciudad}
          </span>
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-cream-50"
          >
            <FacebookIcon className="size-5 text-amber-400" />
            Síguenos en Facebook
          </a>
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-cream-50"
            >
              <Mail className="size-5 text-amber-400" />
              {site.email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
