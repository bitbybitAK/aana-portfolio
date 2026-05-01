export default function Home() {
  return (
    <main className="min-h-screen bg-cream px-10 py-20">
      <div className="mx-auto flex max-w-2xl flex-col gap-8">
        <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-subtle">
          00 — font and color check
        </span>

        <h1 className="font-serif text-5xl leading-tight text-ink-primary">
          hello, <span className="italic text-forest">field notebook</span>.
        </h1>

        <p className="font-sans text-base leading-relaxed text-ink-muted">
          this page exists to verify the four fonts and the cream background
          render correctly. lora is the serif on the heading. inter is this
          paragraph. jetbrains mono is the label above. caveat is the line
          below.
        </p>

        <p className="font-caveat text-2xl text-rose">
          and this is the handwritten accent.
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <span className="h-10 w-10 rounded-full bg-forest" title="forest" />
          <span className="h-10 w-10 rounded-full bg-rose" title="rose" />
          <span className="h-10 w-10 rounded-full bg-ink" title="ink" />
          <span className="h-10 w-10 rounded-full bg-mustard" title="mustard" />
          <span
            className="h-10 w-10 rounded-full border border-border bg-cream"
            title="cream"
          />
        </div>
      </div>
    </main>
  );
}
