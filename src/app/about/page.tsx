import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { getPublicConfig } from "@/api/config";
import AboutPageClient from "@/components/about/AboutPageClient";
import { aboutProfile } from "@/mock/about";

export async function generateMetadata(): Promise<Metadata> {
  let title = "三两园 · 关于";
  try {
    const response = await getPublicConfig();
    const configs = response.data?.data;
    if (Array.isArray(configs)) {
      const titleConfig = configs.find(
        (item: { configKey?: string; configValue?: string }) =>
          item.configKey === "site.title.about"
      );
      if (titleConfig?.configValue) {
        title = titleConfig.configValue;
      }
    }
  } catch (error) {
    console.warn("Failed to generate About page metadata:", error);
  }

  return {
    title,
    description: "三两园：技术随笔、项目痕迹与生活切片。少写几行，多筑一境。",
  };
}

async function isAboutPageEnabled() {
  try {
    const response = await getPublicConfig();
    const configs = response.data?.data;

    if (!Array.isArray(configs)) return true;

    const aboutConfig = configs.find(
      (item: { configKey?: string; configValue?: string }) =>
        item.configKey === "page.about.enable"
    );

    return aboutConfig?.configValue !== "false";
  } catch (error) {
    console.warn("About page: public config unavailable, keeping page enabled.", error);
    return true;
  }
}

export default async function AboutPage() {
  await connection();
  const enabled = await isAboutPageEnabled();

  if (!enabled) notFound();

  let profile = aboutProfile;
  try {
    const response = await getPublicConfig();
    const configs = response.data?.data;
    if (Array.isArray(configs)) {
      const profileConfig = configs.find(
        (item: { configKey?: string; configValue?: string }) =>
          item.configKey === "page.about.profile"
      );
      if (profileConfig?.configValue) {
        profile = JSON.parse(profileConfig.configValue);
      }
    }
  } catch (error) {
    console.warn("Failed to load dynamic about profile, using default fallback.", error);
  }

  return <AboutPageClient profile={profile} />;
}
