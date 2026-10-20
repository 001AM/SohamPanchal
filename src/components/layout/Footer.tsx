import { connectedSocialLinks } from "@/data/socials";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerNav = [
  { label: "About", path: "/about" },
  { label: "Work", path: "/projects" },
  { label: "Writing", path: "/writing" },
  { label: "Photography", path: "/photography" },
  { label: "Explore", path: "/explore" },
  { label: "Now", path: "/now" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-md">
            <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-foreground">
              Soham<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Building software, writing through ideas, photographing places, and staying curious about the world beyond the screen.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm" aria-label="Footer navigation">
            {footerNav.map((link) => (
              <Link key={link.path} to={link.path} className="text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">© 2026 Soham Panchal. Made with attention in Mumbai.</p>
          <div className="flex max-w-2xl flex-wrap gap-x-5 gap-y-3">
            {connectedSocialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
