import { createFileRoute } from "@tanstack/react-router";
import { Stamp, FileText, Calculator, Phone, ArrowRight } from "lucide-react";
import { BOOKING_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/site-config";

const services = [
  {
    icon: Stamp,
    title: "Notaría Pública",
    items: [
      "Poderes notariales generales y especiales",
      "Testamentos y documentos de planificación patrimonial",
      "Actas de affidavit y juramentos",
      "Autenticación de firmas en documentos notariales",
      "Servicio virtual (RON) y presencial a domicilio",
    ],
  },
  {
    icon: FileText,
    title: "Formas Migratorias",
    items: [
      "Peticiones familiares (I-130)",
      "Ajuste de estatus (I-485)",
      "Solicitud de ciudadanía (N-400)",
      "Permiso de trabajo (I-765) y parole",
      "Renovación de residencia permanente",
    ],
  },
  {
    icon: Calculator,
    title: "Preparación de Impuestos",
    items: [
      "Declaraciones federales y estatales personales",
      "Impuestos para pequeños negocios y contratistas",
      "Solicitud y renovación de ITIN",
      "Créditos y deducciones aplicables",
      "Asesoría básica de planificación tributaria",
    ],
  },
];

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Notary Carolina Beelitz" },
      {
        name: "description",
        content:
          "Conoce nuestros servicios de notaría pública, preparación de formas migratorias y declaración de impuestos en Freehold, New Jersey.",
      },
      { property: "og:title", content: "Servicios | Notary Carolina Beelitz" },
      {
        property: "og:description",
        content:
          "Servicios de notaría pública, preparación de formas migratorias y declaración de impuestos en Freehold, NJ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://carolinabeelitz.com/servicios" },
    ],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Nuestros Servicios</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Soluciones integrales para tus necesidades notariales, migratorias y contables, con atención personalizada y profesional.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="inline-flex size-14 items-center justify-center rounded-xl bg-accent/10">
                  <service.icon className="size-7 text-accent" />
                </div>
                <h2 className="mt-6 font-serif text-2xl text-card-foreground">{service.title}</h2>
                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-primary p-8 text-primary-foreground shadow-xl shadow-primary/10 lg:flex-row lg:p-12">
            <div>
              <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">¿Tienes dudas sobre tu trámite?</h2>
              <p className="mt-3 text-primary-foreground/80">
                Contáctanos hoy mismo y recibe una orientación clara sobre el próximo paso.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Contactar
                <ArrowRight className="size-4" />
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
