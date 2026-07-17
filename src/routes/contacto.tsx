import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const PHONE_NUMBER = "+12016673307";
const PHONE_DISPLAY = "(201) 667-3307";
const ADDRESS = "52 Aberdare Ct Unit 2, Freehold, NJ 07728";
const MAPS_URL = "https://maps.google.com/?q=52+Aberdare+Ct+Unit+2+Freehold+NJ+07728";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=${encodeURIComponent(
  "Hola Carolina, vi su página web y me gustaría más información sobre sus servicios."
)}`;

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

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="size-4" />
                  Llamar
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe57]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <MapPin className="size-4" />
                  Ubicación
                </a>
              </div>
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
