import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL, LEGAL_NAME } from "@/lib/site-config";

// NOTA: Este es un borrador de política de privacidad para revisión de la dueña.
// Debe ser revisado antes de considerarse definitivo.

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad | Notary Carolina Beelitz" },
      {
        name: "description",
        content:
          "Política de privacidad de Notary Carolina Beelitz: qué datos recogemos, para qué los usamos y cómo los protegemos.",
      },
      { property: "og:title", content: "Política de Privacidad | Notary Carolina Beelitz" },
      {
        property: "og:description",
        content: "Cómo recogemos, usamos y protegemos tus datos en Notary Carolina Beelitz.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://carolinabeelitz.com/privacidad" },
    ],
  }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Política de Privacidad</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Tu confianza es importante para nosotros. Así manejamos tu información.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-serif text-2xl text-foreground">Qué datos recogemos</h2>
              <p className="mt-3">
                Cuando agendas una cita recogemos tu nombre, correo electrónico, teléfono y el motivo de
                la cita (a través de Google Calendar). Los pagos se procesan por medio de Stripe; este
                sitio no guarda datos de tarjeta. También podemos recibir mensajes que nos envíes por
                WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Para qué los usamos</h2>
              <p className="mt-3">
                Usamos tus datos únicamente para agendar tu cita, comunicarnos contigo y prestarte el
                servicio solicitado.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Documentos personales</h2>
              <p className="mt-3">
                Los documentos personales (pasaportes, números de inmigración, información fiscal) solo se
                solicitan durante el servicio, nunca a través de este sitio web.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Con quién compartimos tus datos</h2>
              <p className="mt-3">
                No vendemos tus datos. Solo los compartimos con los proveedores necesarios para prestar el
                servicio (Google, Stripe, Meta/WhatsApp) y cuando la ley lo exija.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Acceso y eliminación</h2>
              <p className="mt-3">
                Para pedir acceso a tus datos o su eliminación, escríbenos a{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-accent transition-colors hover:text-accent/80"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Responsable</h2>
              <p className="mt-3">
                {LEGAL_NAME}
                <br />
                52 Aberdare Ct Unit 2, Freehold, NJ 07728
              </p>
            </div>

            <p className="pt-4 text-sm text-muted-foreground/70">Última actualización: 3 de noviembre de 2026.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
