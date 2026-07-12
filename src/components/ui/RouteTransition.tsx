"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type LenisLike = {
  stop?: () => void;
  start?: () => void;
  scrollTo?: (y: number, opts?: { immediate?: boolean }) => void;
};

/**
 * Soft-nav hygiene: reset Lenis + ScrollTrigger when the App Router pathname changes.
 * Mount once under SmoothScroll so window.lenis is available.
 */
export default function RouteTransition() {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    const isFirst = prevPath.current === null;
    const pathChanged = prevPath.current !== pathname;
    prevPath.current = pathname;

    if (isFirst || !pathChanged) return;

    const lenis = (window as unknown as { lenis?: LenisLike }).lenis;

    try {
      lenis?.stop?.();
      lenis?.scrollTo?.(0, { immediate: true });
    } catch {
      /* ignore */
    }

    // Hard fallback if Lenis is mid-tween
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // One deferred refresh after the new page mounts contexts — avoid refresh storms.
    const t0 = window.setTimeout(() => {
      try {
        ScrollTrigger.refresh();
      } catch {
        /* ignore */
      }
      try {
        lenis?.start?.();
      } catch {
        /* ignore */
      }
    }, 120);

    return () => {
      window.clearTimeout(t0);
    };
  }, [pathname]);

  return null;
}
