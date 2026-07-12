import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "三两园 · 管理台",
  description: "三两园内容管理台（本地演示）",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-charcoal antialiased">
      {children}
    </div>
  );
}
