import { Link } from "@tanstack/react-router";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import heroDesk from "@/assets/hero-desk.jpg";
import { BOOKING_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Servicios Notariales, Migratorios y de Impuestos
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Tus trámites en <span className="italic text-accent">manos profesionales</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Notaría pública virtual y presencial, preparación de formas migratorias y declaración de impuestos para la comunidad de Freehold, NJ.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Agendar Cita
                <ArrowRight className="size-4" />
              </a>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Ver Servicios
              </Link>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-accent" />
                {PHONE_DISPLAY}
              </a>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <MapPin className="size-4 text-accent" />
                Freehold, New Jersey
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
              <img
                src={heroDesk}
                alt="Escritorio profesional con documentos notariales, pluma y sello notarial"
                width={1024}
                height={1280}
                className="size-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
