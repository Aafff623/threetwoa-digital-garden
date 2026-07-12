"use client";

import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import StyleConsole from "@/components/ui/StyleConsole";
import BackToTop from "@/components/ui/BackToTop";
import TapeStation from "@/components/ui/TapeStation";

/** Public site chrome (Navbar / Footer / motion shell). */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  return (
    <>
      <div className="relative z-10 min-h-full flex flex-col">
        <SmoothScroll>
          <Navbar />
          <main className="grow flex flex-col">
            <motion.div
              key={pathname}
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grow flex flex-col"
            >
              {children}
            </motion.div>
          </main>
          <Footer />
        </SmoothScroll>
      </div>
      <StyleConsole />
      <BackToTop />
      <TapeStation />
    </>
  );
}
