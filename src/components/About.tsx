import { Link } from "@tanstack/react-router";
import { CheckCircle, ArrowRight } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.jpg";

const highlights = [
  "Atención personalizada en español e inglés",
  "Citas virtuales por videollamada segura",
  "Documentos revisados con precisión y cuidado",
  "Ubicación conveniente en Freehold, NJ",
];

export function About() {
  return (
    <section className="w-full bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-primary-foreground/10">
              <img
                src={aboutPortrait}
                alt="Carolina Beelitz, Notaria Pública profesional en su oficina"
                width={1024}
                height={1280}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Sobre Nosotros</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Comprometida con el futuro de tu familia.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              En Notary Carolina Beelitz entendemos que cada documento, cada forma y cada declaración representa un paso importante en la vida de nuestros clientes. Por eso ofrecemos un servicio cercano, responsable y profesional.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="text-base text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/sobre-nosotros"
              className="mt-10 inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 bg-transparent px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Conoce Nuestra Historia
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
