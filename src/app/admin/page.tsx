"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ADMIN_DEMO_PASSCODE,
  clearAdminSettings,
  defaultAdminSettings,
  loadAdminSettings,
  saveAdminSettings,
  type AdminSettings,
} from "@/lib/admin-store";
import { siteIdentity } from "@/data/identity";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [settings, setSettings] = useState<AdminSettings | null>(null);
  const [savedHint, setSavedHint] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("sanliang_admin_ok") === "1") {
      setAuthed(true);
      setSettings(loadAdminSettings());
    }
  }, []);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass === ADMIN_DEMO_PASSCODE) {
      sessionStorage.setItem("sanliang_admin_ok", "1");
      setAuthed(true);
      setSettings(loadAdminSettings());
      setError("");
    } else {
      setError("口令不正确（演示默认：sanliang）");
    }
  };

  const save = () => {
    if (!settings) return;
    const next = saveAdminSettings(settings);
    setSettings(next);
    setSavedHint("已保存到本机 localStorage。前台默认文案仍以代码 fallback 为准；完整 CMS 将对接后端。");
  };

  const reset = () => {
    clearAdminSettings();
    setSettings(defaultAdminSettings());
    setSavedHint("已恢复默认（三两园）");
  };

  if (!authed) {
    return (
      <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
        <p className="mb-2 font-serif text-3xl tracking-widest">三两园</p>
        <p className="mb-8 text-sm text-charcoal/60">管理台 · 演示登录</p>
        <form onSubmit={login} className="space-y-4 rounded-2xl border border-charcoal/10 bg-white/80 p-6 shadow-sm">
          <label className="block text-xs uppercase tracking-widest text-charcoal/50">Passcode</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full rounded-xl border border-charcoal/15 bg-cream px-3 py-2 outline-none focus:border-charcoal/40"
            placeholder="演示口令"
            autoFocus
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" className="w-full rounded-xl bg-charcoal py-2.5 text-sm text-cream">
            进入
          </button>
        </form>
        <Link href="/" className="mt-6 text-center text-sm text-charcoal/50 underline">
          返回前台
        </Link>
      </main>
    );
  }

  if (!settings) return null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-charcoal/10 pb-6">
        <div>
          <h1 className="font-serif text-3xl tracking-widest">三两园 · 管理台</h1>
          <p className="mt-2 text-sm text-charcoal/55">
            本地演示 CMS · 数据在浏览器 localStorage · 默认口令 <code className="rounded bg-charcoal/5 px-1">sanliang</code>
          </p>
        </div>
        <div className="flex gap-2 text-sm">
          <Link href="/" className="rounded-full border border-charcoal/15 px-3 py-1.5 hover:bg-white">
            前台
          </Link>
          <button
            type="button"
            className="rounded-full border border-charcoal/15 px-3 py-1.5 hover:bg-white"
            onClick={() => {
              sessionStorage.removeItem("sanliang_admin_ok");
              setAuthed(false);
            }}
          >
            退出
          </button>
        </div>
      </header>

      <section className="space-y-6">
        <Field
          label="Logo 文案"
          value={settings.logoText}
          onChange={(v) => setSettings({ ...settings, logoText: v })}
        />
        <Field
          label="站点标题"
          value={settings.siteTitle}
          onChange={(v) => setSettings({ ...settings, siteTitle: v })}
        />
        <Field
          label="标语"
          value={settings.tagline}
          onChange={(v) => setSettings({ ...settings, tagline: v })}
        />
        <Field
          label="首页欢迎语"
          value={settings.welcomeText}
          onChange={(v) => setSettings({ ...settings, welcomeText: v })}
        />
        <Field
          label="关于 · 姓名"
          value={settings.about.name}
          onChange={(v) =>
            setSettings({ ...settings, about: { ...settings.about, name: v } })
          }
        />
        <Field
          label="关于 · 角色"
          value={settings.about.role}
          onChange={(v) =>
            setSettings({ ...settings, about: { ...settings.about, role: v } })
          }
        />
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-widest text-charcoal/50">关于 · 引言</span>
          <textarea
            value={settings.about.headline}
            onChange={(e) =>
              setSettings({
                ...settings,
                about: { ...settings.about, headline: e.target.value },
              })
            }
            rows={3}
            className="w-full rounded-xl border border-charcoal/15 bg-white px-3 py-2 outline-none focus:border-charcoal/40"
          />
        </label>

        <div className="flex flex-wrap gap-3 pt-2">
          <button type="button" onClick={save} className="rounded-xl bg-charcoal px-5 py-2.5 text-sm text-cream">
            保存
          </button>
          <button type="button" onClick={reset} className="rounded-xl border border-charcoal/20 px-5 py-2.5 text-sm">
            恢复默认
          </button>
        </div>
        {savedHint && <p className="text-sm text-emerald-800">{savedHint}</p>}
        <p className="text-xs leading-relaxed text-charcoal/45">
          技术说明：此为前台同仓的轻量管理台骨架。GitHub 身份仍为 {siteIdentity.handle} / {siteIdentity.github}。
          完整文章/相册/恋爱 CMS 将对接 spring_server 或后续独立 Admin。最后更新：{settings.updatedAt}
        </p>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs uppercase tracking-widest text-charcoal/50">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-charcoal/15 bg-white px-3 py-2 outline-none focus:border-charcoal/40"
      />
    </label>
  );
}
