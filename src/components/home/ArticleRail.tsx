"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import type { Post } from "@/data/writing";
import ParallaxImage from "@/components/ui/ParallaxImage";

interface ArticleRailProps {
  posts: Post[];
}

export default function ArticleRail({ posts }: ArticleRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  // 重复 3 次实现无缝水平循环（与 StatusGrid 一致）
  const extended = [...posts, ...posts, ...posts];

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
        {extended.map((post, i) => (
          <article
            key={`${post.slug}-${i}`}
            className="article-card-element group w-[270px] shrink-0 overflow-hidden rounded-[1.6rem] border border-charcoal/8 bg-cream p-3 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-32px_rgba(26,26,26,0.38)] dark:border-white/12 dark:bg-charcoal sm:w-[320px]"
          >
            <Link href={`/writing/${post.slug}`} className="block">
              <div className="overflow-hidden rounded-[1.2rem]">
                <ParallaxImage
                  src={post.cover}
                  alt={post.title}
                  aspectRatio="aspect-[16/10]"
                  sizes="(min-width: 1024px) 320px, 82vw"
                  tone="warm"
                  horizontal={true}
                />
              </div>
              <div className="space-y-3 px-1 pb-2 pt-4">
                <div className="flex flex-wrap gap-2 text-[12px] text-charcoal/45 dark:text-cream/45">
                  <span>{post.date}</span>
                  <span>{post.category}</span>
                  <span>{post.mood}</span>
                </div>
                <h2 className="line-clamp-2 text-lg font-semibold leading-snug text-charcoal transition-colors duration-300 group-hover:text-gold dark:text-cream">
                  {post.title}
                </h2>
                <p className="line-clamp-3 text-[13px] leading-6 text-charcoal/62 dark:text-cream/68">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-charcoal/72 dark:text-cream/72">
                  继续阅读
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
