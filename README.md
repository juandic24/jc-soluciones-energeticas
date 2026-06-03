# JC Soluciones Energéticas — Sitio web

Sitio web para el emprendimiento de instalaciones solares para **camper trailers** y **viviendas off-grid**.
Construido con **Next.js 16 + Tailwind CSS v4 + shadcn/ui**. Todo el contacto se canaliza a **WhatsApp**.

---

## 🚀 Cómo correrlo en tu computador

Necesitas tener **Node.js** instalado (versión 20 o superior).

```bash
npm install      # instala las dependencias (solo la primera vez)
npm run dev      # arranca el sitio en modo desarrollo
```

Luego abre **http://localhost:3000** en tu navegador.

Otros comandos:

```bash
npm run build    # genera la versión de producción (verifica que todo compila)
npm run start    # corre la versión de producción ya compilada
npm run lint     # revisa el código
```

---

## ✏️ Cómo editar el contenido (lo más importante)

**Todo el texto, el número de WhatsApp, el Facebook y las fotos se editan en UN SOLO archivo:**

> `src/content/site.ts`

Ahí puedes cambiar:

| Qué | Dónde en `site.ts` |
|-----|--------------------|
| Número de WhatsApp | `whatsapp` (solo dígitos con código de país, ej: `573001234567`) |
| Mensaje que el cliente envía | `whatsappMensaje` |
| Enlace de Facebook | `facebookUrl` |
| Ciudad / zona de cobertura | `ciudad` |
| Textos del inicio | `hero` |
| Servicios | `servicios` |
| Razones para confiar | `confianza` |
| Texto "Sobre nosotros" | `sobreNosotros` |
| Fotos de la galería | `galeria` |

> ⚠️ **Pendientes por reemplazar antes de publicar:**
> 1. `whatsapp` → el número real de WhatsApp.
> 2. `facebookUrl` → el enlace real de la página de Facebook.
> 3. `url` → el dominio final del sitio (lo da Vercel al desplegar).
> 4. Las fotos de la galería (ver abajo).

---

## 🖼️ Cómo cambiar las fotos de los proyectos

Las fotos están en la carpeta `public/proyectos/`. Por ahora hay imágenes de ejemplo (`1.svg` … `6.svg`).

Para poner fotos reales (las de la página de Facebook):

1. Copia tus fotos (`.jpg` o `.png`) dentro de `public/proyectos/`.
   Ejemplo: `public/proyectos/instalacion-finca.jpg`
2. Abre `src/content/site.ts` y en la lista `galeria` apunta a tus archivos:

```ts
galeria: [
  { src: "/proyectos/instalacion-finca.jpg", alt: "Instalación solar en finca" },
  { src: "/proyectos/camper-juan.jpg",       alt: "Sistema solar en camper" },
  // ...agrega todas las que quieras
],
```

Puedes poner tantas fotos como desees. La galería se ajusta sola.

---

## ☁️ Cómo publicarlo gratis en Vercel

1. Sube este proyecto a un repositorio de **GitHub**.
2. Entra a **https://vercel.com** y crea una cuenta (puedes usar tu cuenta de GitHub).
3. Haz clic en **"Add New… → Project"** e importa el repositorio.
4. Vercel detecta Next.js automáticamente. Solo dale **Deploy**.
5. En segundos tendrás una URL pública (ej: `https://jc-soluciones-energeticas.vercel.app`).
6. Copia esa URL y pégala en `src/content/site.ts` en el campo `url`.

Cada vez que hagas un cambio y lo subas a GitHub, Vercel actualiza el sitio solo.

---

## 🎨 Identidad visual

- **Colores:** azul cielo (energía), amarillo sol y verde (medio ambiente).
- **Logo:** `public/logo.svg` (también usado como ícono del navegador y al compartir el link).
  Si más adelante tienen un logo propio, reemplaza ese archivo.

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx      # estructura global, SEO, navbar/footer
│   ├── page.tsx        # arma las secciones en orden
│   └── globals.css     # paleta de colores y estilos base
├── components/         # cada sección del sitio (hero, servicios, galería...)
└── content/
    └── site.ts         # 👈 TODO el contenido editable
public/
├── logo.svg            # logo de la marca
└── proyectos/          # fotos de la galería
```
