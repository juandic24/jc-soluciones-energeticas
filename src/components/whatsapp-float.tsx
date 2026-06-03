import { getWhatsappLink } from "@/content/site";
import { WhatsappIcon } from "@/components/whatsapp-button";

/** Botón flotante de WhatsApp, fijo en la esquina inferior derecha. */
export function WhatsappFloat() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-900/30 transition-transform hover:scale-110 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500/40"
    >
      <WhatsappIcon className="size-7" />
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500/40" />
    </a>
  );
}
