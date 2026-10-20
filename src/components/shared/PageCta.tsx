import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type PageCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  to: string;
  label: string;
};

const PageCta = ({ eyebrow, title, description, to, label }: PageCtaProps) => (
  <section className="mt-24 border-t border-border pt-14">
    <div className="grid gap-8 rounded-lg bg-foreground p-7 text-background sm:p-10 md:grid-cols-[1fr_auto] md:items-end">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-background/55">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-background/65">{description}</p>
      </div>
      <Link
        to={to}
        className="group inline-flex w-fit items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-85"
      >
        {label}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </section>
);

export default PageCta;
