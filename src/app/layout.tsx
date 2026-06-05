import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";

// Tipografía oficial de marca (ver .design/fonts.md)
const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.nombre} — ${site.tagline}`,
  description: site.descripcion,
  keywords: [
    "energía solar",
    "paneles solares",
    "off grid",
    "camper trailer",
    "instalaciones solares",
    site.ciudad,
  ],
  openGraph: {
    title: `${site.nombre} — ${site.tagline}`,
    description: site.descripcion,
    type: "website",
    locale: "es_CO",
    images: [{ url: "/logo.svg", width: 512, height: 512, alt: site.nombre }],
  },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.nombre,
    description: site.descripcion,
    areaServed: site.ciudad,
    sameAs: [site.facebookUrl],
    telephone: `+${site.whatsapp}`,
  };

  return (
    <html lang="es" className={`${poppins.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-cream-100 text-navy-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
