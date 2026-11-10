import { Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/lib/site-config";

// Reseñas reales del perfil de Google Business (5.0, 4 reseñas).
// Textos traducidos del inglés original para la audiencia en español.
const reviews = [
  {
    name: "Yesica Andrea Sotelo Álzate",
    date: "Hace 3 meses",
    text:
      "Quiero agradecer a Carolina, quien me ayudó a llenar los formularios del trámite y me guió muy bien para que todo quedara correcto.",
  },
  {
    name: "Daniela Alfaro",
    date: "Hace 3 meses",
    text:
      "Todos los trámites de mi familia han sido con Carolina; nos ha ayudado a preparar documentos, notarizarlos y organizarlos, a obtener mi green card, y estamos en el proceso de remover las condiciones. Una persona excelente, amable y profesional. Siempre la recomendaré.",
  },
  {
    name: "Daylin Labrada",
    date: "Hace 3 meses",
    text: "Sin duda, el mejor servicio que he recibido. Gracias, Caro, por todo.",
  },
  {
    name: "Jack B.",
    date: "Hace 3 meses",
    text: "¡Excelente servicio de Carolina! La recomiendo totalmente.",
  },
];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.52 12.27c0-.82-.07-1.6-.2-2.36H12v4.47h6.47a5.53 5.53 0 0 1-2.4 3.63v3.02h3.88c2.27-2.09 3.57-5.17 3.57-8.76Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.9l-3.88-3.02c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.11A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54V6.62H1.26a12 12 0 0 0 0 10.76l4.01-3.11Z" />
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.44-3.44A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.26 6.62l4.01 3.11C6.22 6.88 8.87 4.77 12 4.77Z" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="w-full border-y border-border bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
            <div className="mt-4 h-1 w-16 bg-accent" />
          </div>
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm">
            <GoogleG className="size-6" />
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold text-foreground">5.0</span>
              <Stars />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <style>{`
            @keyframes testimonials-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .testimonials-track { animation: testimonials-marquee 40s linear infinite; }
            @media (prefers-reduced-motion: reduce) { .testimonials-track { animation: none; } }
          `}</style>
          <div className="testimonials-track flex w-max gap-6 group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((r, i) => (
            <figure
              key={`${r.name}-${i}`}
              aria-hidden={i >= reviews.length}
              className="flex w-[300px] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:w-[360px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <figcaption className="text-sm font-semibold text-foreground">{r.name}</figcaption>
                  </div>
                </div>
                <GoogleG className="size-5 shrink-0" />
              </div>
              <div className="mt-4">
                <Stars />
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </blockquote>
            </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <GoogleG className="size-4" />
            Ver todas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
