import { connectedSocialLinks } from "@/data/socials";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div>
          <p className="text-sm text-foreground">Soham Panchal</p>
          <p className="mt-1 text-xs text-muted-foreground">Building, writing, observing, exploring. © 2026</p>
        </div>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-3 md:justify-end">
          {connectedSocialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
