import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 Soham Panchal
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "LinkedIn", url: "https://www.linkedin.com/in/soham-panchal-430956255/" },
            { label: "X", url: "https://x.com/Soham0001AM" },
            { label: "Dev.to", url: "https://dev.to/001am" },
            { label: "Medium", url: "https://medium.com/@sohampanchal1469" },
            { label: "LeetCode", url: "https://leetcode.com/u/001AM/" },
          ].map((link) => (
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
