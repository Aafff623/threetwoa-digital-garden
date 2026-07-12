"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import StyleConsole from "@/components/ui/StyleConsole";
import BackToTop from "@/components/ui/BackToTop";
import TapeStation from "@/components/ui/TapeStation";

/** Public site chrome (Navbar / Footer / motion shell). */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative z-10 min-h-full flex flex-col">
        <SmoothScroll>
          <Navbar />
          <main className="grow flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </div>
      <StyleConsole />
      <BackToTop />
      <TapeStation />
    </>
  );
}
