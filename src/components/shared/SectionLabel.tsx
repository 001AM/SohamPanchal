const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3">
    <div className="h-px w-8 bg-primary/50" />
    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  </div>
);

export default SectionLabel;
