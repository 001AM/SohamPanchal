import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageLayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title ? `${title} | Soham Panchal` : "Soham Panchal | Engineer, Writer, Photographer";

    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-full bg-foreground px-4 py-2 text-sm text-background transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
