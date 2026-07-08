/**
 * ───────────────────────────────────────────────────────────────────────────
 *  CONTENIDO DEL SITIO — JC Soluciones Energéticas
 * ───────────────────────────────────────────────────────────────────────────
 *  Este es el ÚNICO archivo que necesitas editar para cambiar textos, el número
 *  de WhatsApp, el enlace de Facebook o las fotos de la galería.
 *  No hace falta tocar los componentes.
 *
 *  PENDIENTES (reemplazar los valores de ejemplo):
 *   1. whatsapp        -> número real con código de país, solo dígitos.
 *   2. facebookUrl     -> enlace real de la página de Facebook.
 *   3. galeria         -> fotos reales en /public/proyectos/ (ver instrucciones).
 * ───────────────────────────────────────────────────────────────────────────
 */

import type { LucideIcon } from "lucide-react";
import {
  Caravan,
  Home,
  BatteryCharging,
  ShieldCheck,
  Camera,
  HeartHandshake,
  Wrench,
  Leaf,
} from "lucide-react";

export const site = {
  // ── Datos del negocio ─────────────────────────────────────────────
  nombre: "JC Soluciones Energéticas",
  nombreCorto: "JC",
  tagline: "Energía solar para tu hogar y tu camper off-grid",
  descripcion:
    "Instalaciones de energía solar para viviendas y campers trailers off-grid. Sistemas confiables, trabajo documentado y acompañamiento de principio a fin.",

  // ── Contacto ──────────────────────────────────────────────────────
  // Número con código de país, SOLO dígitos (sin +, espacios ni guiones).
  // Ejemplo Colombia: "573001234567"
  whatsapp: "573004792271",
  whatsappMensaje:
    "¡Hola! Vi su página web y me interesa una instalación solar. ¿Me pueden dar más información?",
  facebookUrl: "https://www.facebook.com/profile.php?id=61591786560927",
    email: "jcsolucionesenergeticas@gmail.com", // opcional; déjalo vacío si no quieres mostrarlo
  ciudad: "Colombia", // zona de cobertura mostrada en el sitio
  // URL pública del sitio (actualízala con tu dominio real de Vercel).
  url: "https://jc-soluciones-energeticas.vercel.app",

  // ── Hero (portada) ────────────────────────────────────────────────
  hero: {
    titulo: "Energía solar para tu hogar y tu camper off-grid",
    subtitulo:
      "Diseñamos e instalamos sistemas solares a tu medida: independízate de la red eléctrica con energía limpia, silenciosa y confiable.",
    bullets: [
      "Sistemas off-grid para fincas y viviendas", 
      "Instalaciones para camper trailers y vehículos",
      "Asesoría honesta y trabajo garantizado",
    ],
  },

  // ── Servicios ─────────────────────────────────────────────────────
  servicios: [
    {
      icono: Home,
      titulo: "Sistemas off-grid para viviendas",
      descripcion:
        "Soluciones solares completas para fincas y casas alejadas de la red. Dimensionamos el sistema según tus necesidades reales de consumo.",
    },
    {
      icono: Caravan,
      titulo: "Instalaciones para camper & trailers",
      descripcion:
        "Paneles, baterías e inversores optimizados para el espacio y consumo de tu camper o vehículo. Viaja con energía donde quieras, sin depender de enchufes.",
    },
    {
      icono: BatteryCharging,
      titulo: "Almacenamiento y respaldo",
      descripcion:
        "Bancos de baterías e inversores para tener energía estable de día y de noche, y respaldo cuando más lo necesitas.",
    },
  ] as { icono: LucideIcon; titulo: string; descripcion: string }[],

  // ── Confianza / Por qué elegirnos ─────────────────────────────────
  confianza: [
    {
      icono: Camera,
      titulo: "Trabajo real y documentado",
      descripcion:
        "Cada instalación queda registrada con fotos. Lo que ves es lo que hacemos.",
    },
    {
      icono: ShieldCheck,
      titulo: "Instalaciones garantizadas",
      descripcion:
        "Usamos equipos de calidad y respaldamos nuestro trabajo. Tu inversión está protegida.",
    },
    {
      icono: HeartHandshake,
      titulo: "Asesoría honesta",
      descripcion:
        "Te recomendamos solo lo que tu proyecto necesita, sin venderte de más.",
    },
    {
      icono: Wrench,
      titulo: "Acompañamiento completo",
      descripcion:
        "Desde el diseño hasta la puesta en marcha, te acompañamos en cada paso.",
    },
  ] as { icono: LucideIcon; titulo: string; descripcion: string }[],

  // ── Sobre nosotros ────────────────────────────────────────────────
  sobreNosotros: {
    titulo: "Sobre nosotros",
    parrafos: [
      "JC Soluciones Energéticas nace de la pasión por la energía limpia y el deseo de ayudar a las personas a ser independientes energéticamente.",
      "Nos especializamos en instalaciones solares para viviendas y campers off-grid, llevando energía confiable a lugares donde la red eléctrica no llega.",
      "Creemos en el trabajo bien hecho, en la honestidad con cada cliente y en el cuidado del medio ambiente. Por eso documentamos cada proyecto y acompañamos a nuestros clientes en todo el proceso.",
    ],
    icono: Leaf,
  },

  // ── Galería ───────────────────────────────────────────────────────
  // Coloca las fotos en /public/proyectos/ y referencia sus rutas aquí.
  // Ejemplo: "/proyectos/instalacion-1.jpg"
  galeria: [
    { src: "/proyectos/1.jpg", alt: "Instalación de paneles solares" },
    { src: "/proyectos/2.jpg", alt: "Sistema solar en camper trailer" },
    { src: "/proyectos/3.jpg", alt: "Instalación off-grid en vivienda" },
    { src: "/proyectos/4.jpg", alt: "Banco de baterías solares" },
    { src: "/proyectos/5.jpg", alt: "Paneles solares en techo" },
    { src: "/proyectos/6.jpg", alt: "Instalación solar completa" },
  ],

  // ── Navegación ────────────────────────────────────────────────────
  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Por qué elegirnos", href: "#confianza" },
    { label: "Proyectos", href: "#galeria" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

/** Construye el enlace de WhatsApp con el mensaje predefinido. */
export function getWhatsappLink(mensaje: string = site.whatsappMensaje): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
