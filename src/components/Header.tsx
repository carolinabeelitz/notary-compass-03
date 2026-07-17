import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/sobre-nosotros", label: "Sobre Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            Notary Carolina Beelitz
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Freehold, New Jersey
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-foreground" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+12016773307"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="size-4" />
            (201) 667-3307
          </a>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agendar Cita
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex size-10 items-center justify-center rounded-md md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12016773307"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Phone className="size-4" />
              (201) 667-3307
            </a>
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Agendar Cita
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
