import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl font-bold">Notary Carolina Beelitz</h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              Servicios profesionales de notaría, preparación de formas migratorias y preparación de impuestos en Freehold, New Jersey.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Contacto</h4>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="tel:+12016773307"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="size-4 text-gold" />
                  (201) 667-3307
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="size-4 text-gold" />
                <span>Escríbenos para recibir nuestro email de contacto</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="size-4 shrink-0 text-gold" />
                <span>Freehold, New Jersey</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="size-4 shrink-0 text-gold" />
                <span>Lunes a Sábado: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Enlaces</h4>
            <ul className="mt-6 space-y-3">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Notary Carolina Beelitz. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/60">
            Servicios profesionales con responsabilidad y confianza.
          </p>
        </div>
      </div>
    </footer>
  );
}
