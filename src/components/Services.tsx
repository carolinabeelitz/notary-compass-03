import { Link } from "@tanstack/react-router";
import { Stamp, FileText, Calculator, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Stamp,
    number: "01",
    title: "Notaría Pública",
    description:
      "Servicios virtuales y presenciales para poderes notariales, testamentos, actas de affidavit, deeds y autenticación de documentos con validez oficial.",
    href: "/servicios",
  },
  {
    icon: FileText,
    number: "02",
    title: "Formas Migratorias",
    description:
      "Preparación de peticiones familiares, ajuste de estatus, ciudadanía naturalizada y permisos de trabajo. Te ayudamos a llenar tus formularios en español.",
    href: "/servicios",
  },
  {
    icon: Calculator,
    number: "03",
    title: "Preparación de Impuestos",
    description:
      "Declaraciones federales y estatales para individuos y pequeños negocios. Preparamos tu declaración con precisión y en cumplimiento con el IRS.",
    href: "/servicios",
  },
];

export function Services() {
  return (
    <section className="w-full bg-background py-20 lg:py-28" id="servicios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Especialidades
          </h2>
          <div className="mt-4 h-1 w-16 bg-accent" />
          <p className="mt-6 text-lg text-muted-foreground">
            Tres áreas de servicio pensadas para proteger los documentos, el estatus migratorio y las finanzas de tu familia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10">
                  <service.icon className="size-6 text-accent" />
                </div>
                <span className="font-serif text-2xl italic text-muted-foreground/50">{service.number}</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-card-foreground">{service.title}</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{service.description}</p>
              <Link
                to={service.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent transition-colors group-hover:text-accent/80"
              >
                Más Información
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
