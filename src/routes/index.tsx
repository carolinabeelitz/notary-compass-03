import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Notary Carolina Beelitz | Notaría, Inmigración e Impuestos en Freehold, NJ" },
      {
        name: "description",
        content:
          "Servicios profesionales de notaría pública virtual y presencial, preparación de formas migratorias y declaración de impuestos en Freehold, New Jersey. Llama al (201) 677-3307.",
      },
      {
        property: "og:title",
        content: "Notary Carolina Beelitz | Notaría, Inmigración e Impuestos en Freehold, NJ",
      },
      {
        property: "og:description",
        content:
          "Servicios profesionales de notaría pública virtual y presencial, preparación de formas migratorias y declaración de impuestos en Freehold, NJ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Contact />
    </>
  );
}
