export function Footer() {
  return (
    <footer className="border-t border-border px-8 md:px-16 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] uppercase tracking-luxury text-foreground/50">
      <div className="font-display text-base normal-case tracking-tight text-foreground/80">
        Mall of America<span className="text-accent-primary">.</span>
      </div>
      <div className="flex flex-wrap gap-8">
        <span>Bloomington, MN</span>
        <span>An interactive sales experience</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
