import { ShieldCheck, FileCheck, Award } from "lucide-react";

const credentials = [
  {
    icon: ShieldCheck,
    title: "Notaria Pública",
    description: "Autorizada en el Estado de Nueva Jersey",
  },
  {
    icon: FileCheck,
    title: "Preparadora de Impuestos",
    description: "Registrada ante el IRS",
  },
  {
    icon: Award,
    title: "Preparación de Formularios Migratorios",
    description: "Peticiones familiares y ciudadanía",
  },
];

export function TrustBar() {
  return (
    <section className="w-full border-y border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {credentials.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <item.icon className="size-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
