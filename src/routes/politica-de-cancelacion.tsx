import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL, PHONE_TEL, PHONE_DISPLAY, CONSULTATION_PRICE } from "@/lib/site-config";

export const Route = createFileRoute("/politica-de-cancelacion")({
  head: () => ({
    meta: [
      { title: "Política de Cancelación | Notary Carolina Beelitz" },
      {
        name: "description",
        content:
          "Política de cancelación y reprogramación de citas de Notary Carolina Beelitz en Freehold, New Jersey.",
      },
      { property: "og:title", content: "Política de Cancelación | Notary Carolina Beelitz" },
      {
        property: "og:description",
        content: "Política de cancelación y reprogramación de citas en Freehold, NJ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://carolinabeelitz.com/politica-de-cancelacion" },
    ],
  }),
  component: PoliticaCancelacionPage,
});

function PoliticaCancelacionPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Política de Cancelación</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Queremos que tu experiencia sea clara desde el inicio. Esta es nuestra política de pagos y citas.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-serif text-2xl text-foreground">Consulta inicial</h2>
              <p className="mt-3">
                La consulta inicial de {CONSULTATION_PRICE} se paga al momento de agendar tu cita.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Pago no reembolsable</h2>
              <p className="mt-3">
                Este pago no es reembolsable. Si decides contratar el servicio, los {CONSULTATION_PRICE} se
                abonan al costo total de tu trámite.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Cambios de cita</h2>
              <p className="mt-3">
                Puedes reprogramar tu cita avisando con al menos 24 horas de anticipación. Si no te
                presentas sin avisar, pierdes el pago de la consulta.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Contacto</h2>
              <p className="mt-3">
                Para reprogramar o resolver cualquier duda, escríbenos a{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-accent transition-colors hover:text-accent/80"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                o llámanos al{" "}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-medium text-accent transition-colors hover:text-accent/80"
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </div>

            <p className="pt-4 text-sm text-muted-foreground/70">Última actualización: 3 de noviembre de 2026.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
