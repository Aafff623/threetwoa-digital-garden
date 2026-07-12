"use client";

import { useEffect, useRef } from "react";
import { Camera, MapPin, Play } from "lucide-react";
import gsap from "gsap";
import type { GalleryPhoto } from "@/data/gallery";
import ParallaxImage from "@/components/ui/ParallaxImage";

interface GalleryRailProps {
  photos: GalleryPhoto[];
  onSelect: (photo: GalleryPhoto) => void;
}

export default function GalleryRail({ photos, onSelect }: GalleryRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  // 重复 3 次实现无缝水平循环（与 StatusGrid 一致）
  const extended = [...photos, ...photos, ...photos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      const getDistance = () => track.scrollWidth / 3;
      if (getDistance() < 80) return;
      tweenRef.current = gsap.to(track, {
        x: () => -getDistance(),
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, track);

    const handleResize = () => {
      tweenRef.current?.invalidate();
      tweenRef.current?.restart();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mask-image-horizontal overflow-hidden w-full py-2">
      <div
        ref={trackRef}
        className="flex w-max gap-5 gpu-accelerated-track"
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.play()}
      >
        {extended.map((slice, i) => (
          <button
            key={`${slice.id}-${i}`}
            type="button"
            onClick={() => onSelect(slice)}
            className="gallery-slice-element group w-[270px] shrink-0 overflow-hidden rounded-[1.6rem] border border-charcoal/8 bg-white/72 p-3 text-left shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-32px_rgba(26,26,26,0.4)] dark:border-white/10 dark:bg-white/8 sm:w-[320px]"
          >
            <div className="relative overflow-hidden rounded-[1.2rem] aspect-[4/3] bg-charcoal/5">
              {slice.type === "video" ? (
                <>
                  <video
                    src={slice.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-105"
                  />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-cream/90 px-2 py-1 text-[11px] font-medium text-charcoal/80 backdrop-blur dark:bg-charcoal/90 dark:text-cream/80">
                    <Play className="h-3 w-3 fill-gold text-gold" />
                    动态
                  </span>
                </>
              ) : (
                <ParallaxImage
                  src={slice.src}
                  alt={slice.title}
                  aspectRatio="aspect-[4/3]"
                  sizes="(min-width: 1024px) 320px, 82vw"
                  tone="natural"
                  horizontal={true}
                />
              )}
            </div>

            <div className="space-y-3 px-1 pb-2 pt-4">
              <div className="flex items-center justify-between gap-3 text-[12px] text-charcoal/45 dark:text-cream/45">
                <span>{slice.date}</span>
                <span className="inline-flex items-center gap-1 truncate">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {slice.location}
                </span>
              </div>
              <h2 className="line-clamp-1 text-lg font-semibold text-charcoal transition-colors duration-300 group-hover:text-gold dark:text-cream">
                {slice.title}
              </h2>
              <p className="line-clamp-2 text-[13px] leading-6 text-charcoal/62 dark:text-cream/68">
                {slice.description}
              </p>
              <p className="flex items-center gap-2 truncate text-[12px] text-charcoal/45 dark:text-cream/45">
                <Camera className="h-3.5 w-3.5" />
                {slice.camera} / {slice.filmStock}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
