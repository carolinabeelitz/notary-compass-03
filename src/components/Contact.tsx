import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section className="w-full bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-xl shadow-primary/5 sm:p-12">
          <h2 className="font-serif text-3xl tracking-tight text-card-foreground sm:text-4xl">
            ¿Listo para comenzar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Estamos en Freehold, New Jersey, listos para ayudarte con tus trámites notariales, migratorios y financieros.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-xl bg-muted p-6">
              <Phone className="size-6 text-accent" />
              <span className="text-sm font-semibold text-foreground">Teléfono</span>
              <a
                href="tel:+12016773307"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                (201) 667-3307
              </a>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl bg-muted p-6">
              <MapPin className="size-6 text-accent" />
              <span className="text-sm font-semibold text-foreground">Ubicación</span>
              <span className="text-sm text-muted-foreground">Freehold, NJ</span>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl bg-muted p-6">
              <Clock className="size-6 text-accent" />
              <span className="text-sm font-semibold text-foreground">Horario</span>
              <span className="text-sm text-muted-foreground">Lun - Sáb: 9AM - 6PM</span>
            </div>
          </div>

          <Link
            to="/contacto"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-accent-foreground shadow-lg shadow-accent/20 transition-colors hover:bg-accent/90"
          >
            Contactar Ahora
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
