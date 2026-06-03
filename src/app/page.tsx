import { Hero } from "@/components/hero";
import { Servicios } from "@/components/servicios";
import { Confianza } from "@/components/confianza";
import { Galeria } from "@/components/galeria";
import { SobreNosotros } from "@/components/sobre-nosotros";
import { Contacto } from "@/components/contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Confianza />
      <Galeria />
      <SobreNosotros />
      <Contacto />
    </>
  );
}
