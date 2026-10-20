import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

const routes = [
  { label: "Meet Soham", to: "/about" },
  { label: "See selected work", to: "/projects" },
  { label: "Read the notebook", to: "/writing" },
  { label: "Open the photo archive", to: "/photography" },
];

const NotFound = () => {
  return (
    <PageLayout title="Page not found" description="This page could not be found. Continue exploring Soham Panchal's portfolio.">
      <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-24">
        <div className="grid w-full gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-display text-[7rem] font-semibold leading-none text-primary/20 sm:text-[10rem]">404</p>
            <p className="page-kicker -mt-5">Wrong turn</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">This path does not lead anywhere yet.</h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">The address may be old, mistyped, or still waiting to become a page. There are better routes from here.</p>
            <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background">
              Return home <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-card/40">
            <div className="flex items-center gap-3 border-b border-border p-5">
              <Compass className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-foreground">Choose another direction</p>
            </div>
            {routes.map((route, index) => (
              <Link key={route.to} to={route.to} className="group flex items-center justify-between border-b border-border p-5 last:border-b-0 hover:bg-accent/50">
                <span className="flex items-center gap-4 text-sm text-foreground">
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  {route.label}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
