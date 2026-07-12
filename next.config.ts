import type { NextConfig } from "next";

function resolveServerApiBaseUrl() {
  if (process.env.SERVER_API_BASE_URL) {
    return process.env.SERVER_API_BASE_URL.replace(/\/+$/, "");
  }
  // Vercel has no colocated Java — skip rewrites (client will fall back to mock).
  if (process.env.VERCEL) {
    return "";
  }
  return (
    process.env.NODE_ENV === "production"
      ? "http://127.0.0.1:8080/api"
      : "http://localhost:8080/api"
  ).replace(/\/+$/, "");
}

const serverApiBaseUrl = resolveServerApiBaseUrl();

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    if (!serverApiBaseUrl) return [];
    return [
      {
        source: "/api/:path*",
        destination: `${serverApiBaseUrl}/:path*`,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
      },
    ],
  },
};

export default nextConfig;
