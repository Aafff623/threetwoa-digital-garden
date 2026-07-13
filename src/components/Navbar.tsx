"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sun,
  Moon,
  ChevronDown,
  Archive,
  PenLine,
  Camera,
  MapPin,
  Heart,
  Trophy,
  StickyNote,
  Clock,
  Mail,
  MessageCircle,
  User,
  BookOpen,
  Images,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { useSysConfig } from "@/hooks/useSysConfig";
import { siteIdentity } from "@/data/identity";

const iconColors: Record<string, string> = {
  Archive:     "#6b7280",   // slate — archive
  Writing:     "#3b82f6",   // blue — writing
  Gallery:     "#6b7280",   // gray — gallery
  Footprints:  "#10b981",   // emerald — footprints
  Love:        "#ec4899",   // pink — love
  Trophy:      "#f59e0b",   // amber — achievements
  Notes:       "#8b5cf6",   // violet — notes
  Now:         "#ef4444",   // red — now
  Letter:      "#6366f1",   // indigo — letters
  Pond:        "#06b6d4",   // cyan — pond
  About:       "#84cc16",   // lime — about
};

type NavItem = {
  englishName: string;
  chineseName: string;
  path: string;
  previewImg: string;
  icon: LucideIcon;
};

type NavGroup = {
  id: string;
  englishName: string;
  chineseName: string;
  icon: LucideIcon;
  color: string;
  items: NavItem[];
};

// 顶层 4 大类：Words / Visual / Life / About。子项按后台开关过滤，整组为空则隐藏。
const navGroups: NavGroup[] = [
  {
    id: "words",
    englishName: "Words",
    chineseName: "文字",
    icon: BookOpen,
    color: "#3b82f6",
    items: [
      { englishName: "Writing", chineseName: "随笔文章", path: "/writing", previewImg: "writing.png", icon: PenLine },
      { englishName: "Notes", chineseName: "日常碎片", path: "/notes", previewImg: "notes.png", icon: StickyNote },
      { englishName: "Archive", chineseName: "年份归档", path: "/archive", previewImg: "archive.png", icon: Archive },
    ],
  },
  {
    id: "visual",
    englishName: "Visual",
    chineseName: "影像",
    icon: Images,
    color: "#10b981",
    items: [
      { englishName: "Gallery", chineseName: "光影影像", path: "/gallery", previewImg: "gallery.png", icon: Camera },
      { englishName: "Footprints", chineseName: "岁月足迹", path: "/footprints", previewImg: "footprints.png", icon: MapPin },
    ],
  },
  {
    id: "life",
    englishName: "Life",
    chineseName: "生活",
    icon: Sparkles,
    color: "#ec4899",
    items: [
      { englishName: "Love", chineseName: "恋爱纪实", path: "/love", previewImg: "love.png", icon: Heart },
      { englishName: "Trophy", chineseName: "成就徽章", path: "/achievements", previewImg: "trophy.png", icon: Trophy },
      { englishName: "Now", chineseName: "目前状态", path: "/now", previewImg: "now.png", icon: Clock },
      { englishName: "Letter", chineseName: "岁月信件", path: "/letter", previewImg: "letter.png", icon: Mail },
    ],
  },
  {
    id: "about",
    englishName: "About",
    chineseName: "关于",
    icon: User,
    color: "#E8A06A",
    items: [
      { englishName: "About", chineseName: "关于作者", path: "/about", previewImg: "about.png", icon: User },
      { englishName: "Pond", chineseName: "鱼塘反馈", path: "/pond", previewImg: "pond.png", icon: MessageCircle },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pillRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 点击外部自动收起手机菜单
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // GSAP 控制手机菜单面板展开与收起动画
  useEffect(() => {
    if (!menuRef.current) return;

    const ctx = gsap.context(() => {
      if (isMenuOpen) {
        gsap.to(menuRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.2)",
          pointerEvents: "auto",
          overwrite: "auto",
        });
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -12,
          scale: 0.95,
          duration: 0.25,
          ease: "power2.inOut",
          pointerEvents: "none",
          overwrite: "auto",
        });
      }
    }, menuRef);

    return () => ctx.revert();
  }, [isMenuOpen]);

  // 初始化主题设置
  useEffect(() => {
    const savedTheme = localStorage.getItem("atlas_theme") as "light" | "dark" | null;
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (userPrefersDark ? "dark" : "light");
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    requestAnimationFrame(() => setTheme(initialTheme));
  }, []);

  // 切换主题方法
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("atlas_theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // GSAP 控制一级大类胶囊背景滑块 (跟随 hoveredGroup)
  useEffect(() => {
    if (!pillRef.current || !navContainerRef.current) return;

    if (hoveredGroup) {
      const targetEl = navContainerRef.current.querySelector(
        `[data-group="${hoveredGroup}"]`
      ) as HTMLElement;
      if (targetEl) {
        gsap.to(pillRef.current, {
          x: targetEl.offsetLeft,
          y: targetEl.offsetTop,
          width: targetEl.offsetWidth,
          height: targetEl.offsetHeight,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    } else {
      gsap.to(pillRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [hoveredGroup]);

  const { configs, isPageEnabled } = useSysConfig();

  const getConfigValue = (key: string, defaultValue = "") => {
    const cfg = configs.find((c) => c.configKey === key);
    return cfg ? cfg.configValue : defaultValue;
  };

  const logoUrl = getConfigValue("site.logo.url");
  const logoText = siteIdentity.name;

  // 按后台开关过滤子项；某组子项全被禁用则整组隐藏
  const isItemEnabled = (item: NavItem) => {
    switch (item.path) {
      case "/footprints":
        return isPageEnabled("page.footprints.enable", true);
      case "/love":
        return isPageEnabled("page.love.enable", true);
      case "/letter":
        return isPageEnabled("page.letter.enable", true);
      case "/now":
        return isPageEnabled("page.now.enable", true);
      case "/pond":
        return isPageEnabled("page.pond.enable", true);
      case "/about":
        return isPageEnabled("page.about.enable", true);
      default:
        return true;
    }
  };

  const filteredGroups = useMemo(
    () =>
      navGroups
        .map((g) => ({ ...g, items: g.items.filter(isItemEnabled) }))
        .filter((g) => g.items.length > 0),
    [isPageEnabled]
  );

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6 lg:px-8">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-3">
        {/* 左胶囊: Logo */}
        <Link
          href="/"
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              y: -3,
              scale: 1.01,
              boxShadow: "0 12px 24px -8px rgba(15, 15, 15, 0.25)",
              duration: 0.35,
              ease: "power2.out",
            });
            const logoA = e.currentTarget.querySelector(".logo-a-icon");
            if (logoA) {
              gsap.to(logoA, { rotate: -8, scale: 1.1, duration: 0.4, ease: "back.out(1.7)" });
            }
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              y: 0,
              scale: 1,
              boxShadow: "0 6px 18px -6px rgba(15,15,15,0.15), 0 1px 2px rgba(0,0,0,0.03)",
              duration: 0.35,
              ease: "power2.out",
            });
            const logoA = e.currentTarget.querySelector(".logo-a-icon");
            if (logoA) {
              gsap.to(logoA, { rotate: 0, scale: 1, duration: 0.4, ease: "power2.out" });
            }
          }}
          className="group/logo pointer-events-auto relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-2xl border border-charcoal/10 dark:border-white/12 bg-cream/90 dark:bg-surface/95 px-3 py-2 shadow-[0_6px_18px_-6px_rgba(15,15,15,0.15),0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-md active:scale-[0.98] sm:px-4"
        >
          {/* Logo 标志性小图标 */}
          {logoUrl ? (
            <span className="logo-a-icon relative flex h-5 w-5 items-center justify-center overflow-hidden rounded bg-transparent">
              <Image
                src={logoUrl}
                alt="Logo"
                fill
                sizes="20px"
                unoptimized
                className="object-contain"
              />
            </span>
          ) : (
            <span className="logo-a-icon relative flex h-5 w-5 items-center justify-center overflow-hidden rounded bg-charcoal text-cream dark:bg-cream dark:text-charcoal transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3 w-3"
              >
                <path d="M12 1a3 3 0 0 0-3 3v1.3a5.9 5.9 0 0 0-2.3.8L5.8 5.2a3 3 0 0 0-4.2 4.2l.9.9A5.9 5.9 0 0 0 2 12a3 3 0 0 0 3 3h1.3a5.9 5.9 0 0 0 .8 2.3l-.9.9a3 3 0 0 0 4.2 4.2l.9-.9a5.9 5.9 0 0 0 2.3.8V23a3 3 0 0 0 6 0v-1.3a5.9 5.9 0 0 0 2.3-.8l.9.9a3 3 0 0 0 4.2-4.2l-.9-.9a5.9 5.9 0 0 0 .8-2.3H22a3 3 0 0 0 0-6h-1.3a5.9 5.9 0 0 0-.8-2.3l.9-.9a3 3 0 0 0-4.2-4.2l-.9.9A5.9 5.9 0 0 0 15 5.3V4a3 3 0 0 0-3-3zm0 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </span>
          )}

          <span className="relative text-[13px] font-serif tracking-wider text-charcoal dark:text-cream transition-colors duration-300">
            {logoText}
            <span className="ml-2 hidden text-[8px] font-normal uppercase tracking-widest text-gold opacity-75 transition-opacity group-hover/logo:opacity-100 sm:inline">
              ©2026
            </span>
          </span>
        </Link>

        {/* 右胶囊: 导航链接与动作按钮 */}
        <div className="pointer-events-auto relative inline-flex min-w-0 items-center gap-1 rounded-full border border-charcoal/10 bg-cream/90 px-1.5 py-1.5 shadow-[0_6px_18px_-6px_rgba(15,15,15,0.15),0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-md transition-[box-shadow,border-color] duration-300 dark:border-white/12 dark:bg-surface/95 sm:gap-1.5 sm:px-2">

          {/* 桌面 / 平板端：一级大类胶囊 + 悬浮二级面板 */}
          <div
            ref={navContainerRef}
            className="hidden md:flex items-center space-x-1 relative"
          >
            {/* GSAP 驱动的背景滑动气泡（跟随一级大类） */}
            <div
              ref={pillRef}
              className="absolute left-0 top-0 rounded-full bg-charcoal/10 dark:bg-white/10 border border-charcoal/5 dark:border-white/5 pointer-events-none opacity-0"
              style={{ zIndex: 0 }}
            />

            {filteredGroups.map((group) => {
              const isActive = group.items.some((it) => pathname === it.path);
              const previewItem =
                group.items.find((it) => it.path === hoveredItem) ?? group.items[0];
              return (
                <div
                  key={group.id}
                  data-group={group.id}
                  className="relative group/nav"
                  onMouseEnter={() => {
                    setHoveredGroup(group.id);
                    setHoveredItem(null);
                  }}
                  onMouseLeave={() => {
                    setHoveredGroup(null);
                    setHoveredItem(null);
                  }}
                >
                  {/* 一级大类触发器（不跳转，仅展开二级；键盘 Tab 聚焦时通过 focus-within 展开） */}
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={hoveredGroup === group.id}
                    className={`relative z-10 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest transition-colors duration-300 font-sans py-2 px-3 rounded-full ${
                      isActive
                        ? "text-gold font-semibold"
                        : "text-charcoal/60 hover:text-charcoal dark:text-cream/70 dark:hover:text-cream"
                    }`}
                  >
                    <group.icon className="h-3 w-3 stroke-[1.6]" color={group.color} aria-hidden="true" />
                    {group.englishName}
                    <ChevronDown
                      className={`w-2.5 h-2.5 opacity-50 transition-transform duration-300 ${
                        hoveredGroup === group.id ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* 二级悬浮面板：子项列表 + 预览缩略图（hover 或键盘 focus-within 时显示） */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto group-focus-within/nav:opacity-100 group-focus-within/nav:translate-y-0 group-focus-within/nav:pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-[100]">
                    <div className="flex gap-2 p-2 bg-cream dark:bg-charcoal border border-charcoal/10 dark:border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                      {/* 子项列表 */}
                      <div className="flex flex-col w-44">
                        {group.items.map((item) => {
                          const itemActive = pathname === item.path;
                          return (
                            <Link
                              key={item.path}
                              href={item.path}
                              onMouseEnter={() => setHoveredItem(item.path)}
                              className={`flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-colors ${
                                itemActive
                                  ? "bg-gold/10"
                                  : "hover:bg-charcoal/5 dark:hover:bg-white/5"
                              }`}
                            >
                              <item.icon
                                className="h-3 w-3 stroke-[1.6] shrink-0"
                                color={iconColors[item.englishName]}
                                aria-hidden="true"
                              />
                              <span className="flex flex-col leading-tight">
                                <span
                                  className={`text-[10px] font-sans font-semibold tracking-widest uppercase ${
                                    itemActive
                                      ? "text-gold"
                                      : "text-charcoal/80 dark:text-cream/80"
                                  }`}
                                >
                                  {item.englishName}
                                </span>
                                <span className="text-[8px] font-sans text-charcoal/45 dark:text-cream/45 tracking-wider">
                                  {item.chineseName}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      {/* 子项预览缩略图（跟随 hoveredItem，默认组首项；高度随子项列表拉伸） */}
                      <div className="relative w-36 self-stretch min-h-32 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={`/assets/preview/${previewItem.previewImg}`}
                          alt={previewItem.englishName}
                          fill
                          sizes="144px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                        <div className="absolute bottom-1.5 left-2 right-2">
                          <span className="block text-white text-[9px] font-sans font-semibold uppercase tracking-widest">
                            {previewItem.englishName}
                          </span>
                          <span className="block text-cream/70 text-[8px] font-sans tracking-wider mt-0.5">
                            {previewItem.chineseName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 手机端"菜单"汉堡折叠触发按钮（onMouseDown 阻止冒泡，避免与 click-outside 竞态） */}
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="flex md:hidden items-center gap-1.5 rounded-full px-2.5 py-1.5 font-sans text-[9px] uppercase tracking-wider transition-all text-charcoal bg-charcoal/5 hover:bg-charcoal/10 dark:text-cream dark:bg-white/5 dark:hover:bg-white/10 cursor-pointer font-semibold"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-0.5 w-3">
              <span className={`h-[1px] w-full bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`h-[1px] w-full bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[1px] w-full bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
            </div>
            <span>Menu</span>
          </button>

          {/* 手机端折叠面板：大类 accordion（tap 展开） */}
          <div
            ref={menuRef}
            className="absolute top-full right-0 mt-3 w-[300px] max-w-[calc(100vw-1.5rem)] rounded-3xl border border-charcoal/10 bg-cream/95 p-3 shadow-[0_20px_50px_rgba(15,15,15,0.15)] backdrop-blur-md dark:border-white/10 dark:bg-charcoal/95 pointer-events-none opacity-0 scale-95 origin-top-right z-[100] md:hidden"
          >
            <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-charcoal/5 dark:border-white/5">
              <span className="text-[9px] font-sans font-semibold uppercase tracking-widest text-charcoal/40 dark:text-cream/40">
                Directory
              </span>
              <span className="text-[9px] font-sans uppercase tracking-widest text-gold opacity-80">
                三两园
              </span>
            </div>

            <div className="flex flex-col">
              {filteredGroups.map((group) => {
                const isActive = group.items.some((it) => pathname === it.path);
                const isOpen = openGroup === group.id;
                return (
                  <div
                    key={group.id}
                    className="border-b border-charcoal/5 dark:border-white/5 last:border-0"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenGroup(isOpen ? null : group.id)}
                      className="w-full flex items-center gap-2 py-2.5 px-1 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <group.icon className="h-3.5 w-3.5 stroke-[1.6] shrink-0" color={group.color} aria-hidden="true" />
                      <span
                        className={`text-[10px] font-sans font-bold tracking-widest uppercase ${
                          isActive ? "text-gold" : "text-charcoal/80 dark:text-cream/80"
                        }`}
                      >
                        {group.englishName}
                      </span>
                      <span className="text-[8px] font-sans text-charcoal/40 dark:text-cream/40 tracking-wider ml-auto mr-1">
                        {group.chineseName} · {group.items.length}
                      </span>
                      <ChevronDown
                        className={`w-3 h-3 text-charcoal/40 dark:text-cream/40 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="grid grid-cols-2 gap-1.5 pb-2.5">
                        {group.items.map((item) => {
                          const itemActive = pathname === item.path;
                          return (
                            <Link
                              key={item.path}
                              href={item.path}
                              onClick={() => setIsMenuOpen(false)}
                              className={`group flex flex-col justify-center items-start gap-0.5 p-2.5 rounded-2xl border transition-all duration-300 active:scale-[0.98] ${
                                itemActive
                                  ? "border-gold/30 bg-gold/5 dark:bg-gold/10"
                                  : "border-charcoal/5 dark:border-white/5 bg-cream-dark/20 dark:bg-charcoal/20 hover:bg-cream-dark/60 dark:hover:bg-charcoal/60 hover:border-charcoal/10 dark:hover:border-white/10"
                              }`}
                            >
                              <span className="inline-flex items-center gap-1 text-[9px] font-sans font-bold tracking-widest uppercase text-charcoal/80 dark:text-cream/80">
                                <item.icon
                                  className="h-2.5 w-2.5 stroke-[1.6]"
                                  color={iconColors[item.englishName]}
                                  aria-hidden="true"
                                />
                                {item.englishName}
                              </span>
                              <span className="text-[8px] font-sans text-charcoal/45 dark:text-cream/45 tracking-wider">
                                {item.chineseName}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* 主题切换 — 独立于导航胶囊，固定在页面右上角 */}
      <button
        onClick={toggleTheme}
        className="pointer-events-auto fixed right-4 top-5 z-50 cursor-pointer rounded-full border border-charcoal/10 bg-cream/90 p-2.5 text-charcoal shadow-[0_6px_18px_-6px_rgba(15,15,15,0.15),0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all hover:border-charcoal hover:bg-cream hover:shadow-[0_12px_24px_-8px_rgba(15,15,15,0.25)] active:scale-95 dark:border-white/12 dark:bg-surface/95 dark:text-cream dark:hover:border-white dark:hover:bg-surface sm:right-6 sm:top-6"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? (
          <Moon className="w-4 h-4 stroke-[1.25]" />
        ) : (
          <Sun className="w-4 h-4 stroke-[1.25]" />
        )}
      </button>
    </header>
  );
}
