# JC Soluciones Energéticas — Sitio web

Sitio web corporativo para **JC Soluciones Energéticas**, un negocio de instalaciones de energía
solar para **camper trailers** y **viviendas off-grid** en Colombia. El objetivo del proyecto era dar
credibilidad a un negocio que hasta entonces solo operaba por una página de Facebook, y canalizar
todos los contactos hacia WhatsApp.

🔗 **Sitio en producción:** https://jc-soluciones-energeticas.vercel.app

---

## Stack

| Área | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router, Server Components) |
| UI | React 19 |
| Estilos | Tailwind CSS v4 (configuración CSS-first con `@theme`) |
| Componentes | shadcn/ui sobre Base UI |
| Lenguaje | TypeScript (modo estricto) |
| Tipografía | Poppins (`next/font`) |
| Deploy | Vercel (CI en cada push a `main`) |

---

## Decisiones de diseño técnico

**Contenido centralizado en un solo archivo.** Todo el texto, los datos de contacto y la galería
viven en `src/content/site.ts`, tipado y exportado como un único objeto. Los componentes solo
consumen ese objeto y no contienen strings propios. El sitio lo administra el dueño del negocio, que
no es programador: editar la web significa editar un archivo con comentarios en español, no tocar
JSX repartido en diez componentes.

**Sin CMS, sin base de datos, sin backend.** El negocio no necesita autenticación, pagos ni
contenido dinámico. Un sitio estático elimina superficie de ataque, costos recurrentes y
mantenimiento; el contenido cambia unas pocas veces al año y un commit es suficiente. La conversión
ocurre en WhatsApp, no en el sitio.

**Sistema de diseño antes que componentes.** La identidad de marca (paleta, tipografía, logo) se
definió primero y está documentada en `.design/`. Las escalas de color propias (`navy`, `cream`,
`eco`) se declaran como tokens de Tailwind v4 en `globals.css` mediante `@theme`, así que la paleta
se aplica con utilidades (`bg-navy-900`, `text-cream-100`) en lugar de valores hex sueltos.

**Conversión como restricción de diseño.** Botón flotante de WhatsApp siempre visible, mensaje
predefinido que se arma con `getWhatsappLink()`, y CTAs repetidos en cada sección. El sitio tiene un
solo objetivo medible: iniciar una conversación.

**Íconos de marca propios.** `lucide-react` v1 retiró los logos de marca (Facebook, Instagram,
WhatsApp) por motivos de licencia, así que están implementados como SVG propios en
`src/components/icons.tsx`.

---

## Estructura

```
.design/                 # identidad de marca: paleta, tipografía, logo (fuente de verdad)
src/
├── app/
│   ├── layout.tsx       # shell global, metadata/SEO, Open Graph, navbar + footer
│   ├── page.tsx         # composición de las secciones del one-page
│   └── globals.css      # tokens de color y tipografía (@theme de Tailwind v4)
├── components/
│   ├── hero.tsx         # portada con CTA principal
│   ├── servicios.tsx    # servicios ofrecidos
│   ├── confianza.tsx    # razones para confiar
│   ├── galeria.tsx      # galería de proyectos con lightbox
│   ├── sobre-nosotros.tsx
│   ├── contacto.tsx     # datos de contacto y redes
│   ├── whatsapp-float.tsx  # botón flotante persistente
│   ├── logo.tsx         # logo oficial como componente (variante clara/oscura)
│   ├── icons.tsx        # SVG de marca propios
│   └── ui/              # primitivas de shadcn/ui
├── content/
│   └── site.ts          # 👈 TODO el contenido editable del sitio
└── lib/utils.ts
public/
├── brand/               # logo e ícono en SVG y PNG
└── proyectos/           # fotos reales de instalaciones
```

---

## Correrlo localmente

Requiere **Node.js 20+**.

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # build de producción
npm run start    # sirve el build
npm run lint     # ESLint
```

---

## Guía para administrar el sitio

> Esta sección es para el dueño del negocio: cómo actualizar la web sin conocimientos técnicos.

### Editar textos y datos de contacto

Todo se edita en **`src/content/site.ts`**:

| Qué quieres cambiar | Campo en `site.ts` |
|---------------------|--------------------|
| Número de WhatsApp | `whatsapp` (solo dígitos con código de país, ej: `573001234567`) |
| Mensaje que el cliente envía al escribir | `whatsappMensaje` |
| Enlace de Facebook | `facebookUrl` |
| Enlace de Instagram | `instagramUrl` |
| Correo electrónico | `email` |
| Ciudad / zona de cobertura | `ciudad` |
| Textos de la portada | `hero` |
| Servicios ofrecidos | `servicios` |
| Razones para confiar | `confianza` |
| Texto "Sobre nosotros" | `sobreNosotros` |
| Fotos de la galería | `galeria` |

### Agregar fotos de proyectos

1. Copia las fotos (`.jpg` o `.png`) dentro de `public/proyectos/`.
2. En `src/content/site.ts`, agrégalas a la lista `galeria`:

```ts
galeria: [
  { src: "/proyectos/instalacion-finca.jpg", alt: "Instalación solar en finca" },
  { src: "/proyectos/camper.jpg",            alt: "Sistema solar en camper trailer" },
],
```

El `alt` describe la foto: lo leen Google y los lectores de pantalla, así que conviene que sea
específico. La galería se ajusta sola a la cantidad de fotos.

### Publicar los cambios

El sitio está conectado a Vercel: **cada cambio subido a la rama `main` se publica solo** en menos
de un minuto. No hay que hacer nada más.

---

## Identidad visual

La identidad de marca vive en [`.design/`](.design/) y manda sobre cualquier estilo del código:

- **Azul Profundo** `#102A43` — color principal (fondos, textos)
- **Ámbar Solar** `#F59E0B` — acento y llamados a la acción
- **Amarillo Sol** `#FBBF24` — detalles e íconos
- **Verde Energía** `#0F9D6B` — sostenibilidad y ahorro (uso moderado)
- **Crema Neutra** `#F6F1E7` — fondo cálido, en lugar de blanco puro
- **Tipografía:** Poppins

Proporción de uso: 60% azul / 30% crema / 10% ámbar. Los botones de WhatsApp conservan el verde
característico de la plataforma por convención, para que se reconozcan como canal.

---

## Licencia y uso

El **código** de este repositorio es público con fines de portafolio y referencia.

La **marca** (nombre, logo, paleta y todo el contenido de `.design/`), los **textos** y las
**fotografías de instalaciones** en `public/proyectos/` son propiedad de JC Soluciones Energéticas y
**no** se licencian para reutilización. Si quieres partir de la estructura del proyecto, reemplaza
esos elementos por los tuyos.

Todos los derechos reservados.
