import { ReactNode } from "react";

type PageIntroProps = {
  kicker: string;
  title: ReactNode;
  lead: string;
  aside?: ReactNode;
  className?: string;
};

const PageIntro = ({ kicker, title, lead, aside, className = "" }: PageIntroProps) => (
  <header className={`grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end ${className}`}>
    <div className="max-w-3xl">
      <p className="page-kicker">{kicker}</p>
      <h1 className="page-title mt-5 text-balance">{title}</h1>
      <p className="page-lead mt-6 max-w-2xl">{lead}</p>
    </div>
    {aside ? <div>{aside}</div> : null}
  </header>
);

export default PageIntro;
