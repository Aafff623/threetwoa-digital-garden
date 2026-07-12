import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";

describe("hasServerApiBaseURL / getServerApiURL", () => {
  const OLD = { ...process.env };

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...OLD };
    delete process.env.SERVER_API_BASE_URL;
    delete process.env.VERCEL;
  });

  afterEach(() => {
    process.env = { ...OLD };
  });

  it("returns empty base on Vercel when env unset", async () => {
    process.env.VERCEL = "1";
    const mod = await import("./request");
    expect(mod.hasServerApiBaseURL()).toBe(false);
    expect(mod.getServerApiURL("/config/public")).toBe("");
  });

  it("honors SERVER_API_BASE_URL when set", async () => {
    process.env.VERCEL = "1";
    process.env.SERVER_API_BASE_URL = "https://api.example.com/api/";
    const mod = await import("./request");
    expect(mod.hasServerApiBaseURL()).toBe(true);
    expect(mod.getServerApiURL("config/public")).toBe(
      "https://api.example.com/api/config/public"
    );
  });
});
