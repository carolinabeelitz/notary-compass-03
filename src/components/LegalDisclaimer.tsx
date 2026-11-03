const ES =
  "Aviso: No soy abogada con licencia para ejercer la abogacía y no puedo dar asesoría legal sobre inmigración ni sobre ningún otro asunto legal, ni cobrar honorarios por asesoría legal.";
const EN =
  "Notice: I am not an attorney licensed to practice law and may not give legal advice about immigration or any other legal matter or accept fees for legal advice.";

// variant "section": visible dentro/junto a tarjetas de formularios migratorios.
// variant "footer": versión compacta pero legible para el pie de página.
export function LegalDisclaimer({ variant = "section" }: { variant?: "section" | "footer" }) {
  if (variant === "footer") {
    return (
      <div className="space-y-1 text-xs leading-relaxed text-primary-foreground/70">
        <p>{ES}</p>
        <p>{EN}</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-accent/30 bg-accent/5 p-5 text-sm leading-relaxed text-muted-foreground">
      <p className="font-medium text-foreground">{ES}</p>
      <p className="mt-2 italic">{EN}</p>
    </div>
  );
}
