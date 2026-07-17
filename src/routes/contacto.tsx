import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Notary Carolina Beelitz" },
      {
        name: "description",
        content:
          "Contácta a Notary Carolina Beelitz en Freehold, New Jersey. Llama al (201) 667-3307 para notaría, inmigración e impuestos.",
      },
      { property: "og:title", content: "Contacto | Notary Carolina Beelitz" },
      {
        property: "og:description",
        content:
          "Contácta a Notary Carolina Beelitz en Freehold, NJ. Llama al (201) 667-3307.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contacto" },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Contacto</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Estamos listos para ayudarte. Escríbenos o llámanos para agendar tu cita.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl tracking-tight text-foreground">Hablemos</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Puedes contactarnos por teléfono, correo electrónico o visitarnos en nuestra ubicación en Freehold, New Jersey.
              </p>

              <ul className="mt-10 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Phone className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                    <a
                      href="tel:+12016773307"
                      className="mt-1 text-lg text-muted-foreground transition-colors hover:text-foreground"
                    >
                      (201) 667-3307
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <MapPin className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dirección</h3>
                    <a
                      href="https://maps.google.com/?q=52+Aberdare+Ct+Unit+2+Freehold+NJ+07728"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-lg text-muted-foreground transition-colors hover:text-foreground"
                    >
                      52 Aberdare Ct Unit 2<br />Freehold, NJ 07728
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Mail className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Correo Electrónico</h3>
                    <p className="mt-1 text-lg text-muted-foreground">
                      Solicítanos el email de contacto por teléfono
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Clock className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Horario y Citas</h3>
                    <p className="mt-1 text-lg text-muted-foreground">
                      Lunes a Sábado: 9:00 AM - 6:00 PM
                    </p>
                    <p className="mt-1 text-base text-muted-foreground/80">
                      Citas presenciales con dirección exacta al agendar. También disponible para citas virtuales y domingos bajo previa coordinación.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-xl shadow-primary/5">
              <h3 className="font-serif text-2xl text-card-foreground">Solicita una Cita</h3>
              <p className="mt-2 text-muted-foreground">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>

              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(201) 000-0000"
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option>Notaría Pública</option>
                    <option>Formas Migratorias</option>
                    <option>Preparación de Impuestos</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Cuéntanos brevemente cómo podemos ayudarte"
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
