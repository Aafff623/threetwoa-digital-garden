/**
 * Client-side admin settings store (localStorage).
 * Demo CMS until a real spring_admin / API is wired.
 */
import type { AboutProfile } from "@/interface/about";
import { aboutProfile as defaultAbout } from "@/mock/about";
import { siteIdentity } from "@/data/identity";

const KEY = "sanliang_admin_settings_v1";

export type AdminSettings = {
  logoText: string;
  siteTitle: string;
  tagline: string;
  welcomeText: string;
  about: AboutProfile;
  updatedAt: string;
};

export function defaultAdminSettings(): AdminSettings {
  return {
    logoText: siteIdentity.name,
    siteTitle: siteIdentity.siteTitleDefault,
    tagline: siteIdentity.tagline,
    welcomeText: siteIdentity.tagline,
    about: structuredClone(defaultAbout) as AboutProfile,
    updatedAt: new Date().toISOString(),
  };
}

export function loadAdminSettings(): AdminSettings {
  if (typeof window === "undefined") return defaultAdminSettings();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultAdminSettings();
    const parsed = JSON.parse(raw) as AdminSettings;
    return { ...defaultAdminSettings(), ...parsed, about: { ...defaultAdminSettings().about, ...parsed.about } };
  } catch {
    return defaultAdminSettings();
  }
}

export function saveAdminSettings(settings: AdminSettings) {
  const next = { ...settings, updatedAt: new Date().toISOString() };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function clearAdminSettings() {
  localStorage.removeItem(KEY);
}

/** Simple demo passcode — change in admin or via env later */
export const ADMIN_DEMO_PASSCODE = "sanliang";
