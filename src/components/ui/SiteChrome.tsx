"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingFooterPeekers from "@/components/ui/FloatingFooterPeekers";
import SmoothScroll from "@/components/ui/SmoothScroll";
import StyleConsole from "@/components/ui/StyleConsole";
import BackToTop from "@/components/ui/BackToTop";
import TapeStation from "@/components/ui/TapeStation";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <div className="relative z-10 min-h-full flex flex-col">{children}</div>;
  }

  return (
    <>
      <div className="relative z-10 min-h-full flex flex-col">
        <SmoothScroll>
          <Navbar />
          <main className="grow flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </div>
      <FloatingFooterPeekers />
      <StyleConsole />
      <BackToTop />
      <TapeStation />
    </>
  );
}
