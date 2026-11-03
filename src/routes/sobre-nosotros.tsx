import { createFileRoute } from "@tanstack/react-router";
import { Shield, Heart, Users, Award } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.jpeg";

const values = [
  {
    icon: Shield,
    title: "Integridad",
    description: "Cada documento y forma es revisado con honestidad y precisión.",
  },
  {
    icon: Heart,
    title: "Cercanía",
    description: "Tratamos a cada cliente como familia, con paciencia y respeto.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Servimos a la comunidad hispana de Freehold y toda Nueva Jersey.",
  },
  {
    icon: Award,
    title: "Profesionalismo",
    description: "Años de experiencia respaldan cada servicio que ofrecemos.",
  },
];

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros | Notary Carolina Beelitz" },
      {
        name: "description",
        content:
          "Conoce a Notary Carolina Beelitz. Servicios de notaría, inmigración e impuestos con integridad y cercanía en Freehold, New Jersey.",
      },
      { property: "og:title", content: "Sobre Nosotros | Notary Carolina Beelitz" },
      {
        property: "og:description",
        content:
          "Servicios de notaría, inmigración e impuestos con integridad y cercanía en Freehold, NJ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sobre-nosotros" },
    ],
  }),
  component: SobreNosotrosPage,
});

function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Sobre Nosotros</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Un espacio de confianza donde tus documentos, trámites y finanzas están en manos expertas.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-xl shadow-primary/10">
                <img
                  src={aboutPortrait}
                  alt="Carolina Beelitz, Notaria Pública profesional"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Nuestra Historia</span>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
                Experiencia y dedicación al servicio de la comunidad.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Notary Carolina Beelitz nace de la necesidad de ofrecer servicios notariales, migratorios y de impuestos accesibles, claros y confiables para las familias de Freehold y sus alrededores. Entendemos que detrás de cada trámite hay una historia, un sueño y un futuro por construir.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Ya sea que necesites notarizar un documento importante, preparar una forma migratoria o presentar tus impuestos, nuestro compromiso es guiarte con profesionalismo y trato humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">Nuestros Valores</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Principios que guían cada interacción con nuestros clientes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-accent/10">
                  <value.icon className="size-6 text-accent" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-card-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
