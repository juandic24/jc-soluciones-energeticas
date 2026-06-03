import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite servir los SVG placeholder de /public/proyectos a través de
    // next/image. Son archivos propios, así que es seguro. Al usar fotos
    // reales (.jpg/.png) esta opción simplemente no estorba.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
