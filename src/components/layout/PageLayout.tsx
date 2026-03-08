import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
