import { describe, expect, it } from "vitest";
import { siteIdentity } from "./identity";

describe("siteIdentity", () => {
  it("uses literary brand 三两园 as primary name", () => {
    expect(siteIdentity.name).toBe("三两园");
    expect(siteIdentity.nameEn).toBe("Sanliang Garden");
  });

  it("keeps technical handle separate from display brand", () => {
    expect(siteIdentity.handle).toBe("threetwoa");
    expect(siteIdentity.github).toBe("Aafff623");
  });

  it("does not use legacy RRTiamo branding", () => {
    const blob = JSON.stringify(siteIdentity);
    expect(blob).not.toMatch(/RRTiamo|Rrtiamo|春风不解别离/i);
  });
});
