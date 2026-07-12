import request, { getServerApiURL, hasServerApiBaseURL } from "./request";
import type { AxiosResponse } from "axios";

export interface PublicConfigItem {
  configKey: string;
  configValue: string;
  [key: string]: unknown;
}

export interface PublicConfigBody {
  code: number;
  data?: PublicConfigItem[];
  message?: string;
}

type PublicConfigAxios = AxiosResponse<PublicConfigBody>;

const CLIENT_TTL_MS = 60_000;
const NEGATIVE_TTL_MS = 5_000;

let clientCache: { expires: number; value: PublicConfigAxios } | null = null;
let clientInflight: Promise<PublicConfigAxios> | null = null;

/**
 * Browser: dedupe in-flight GETs and cache payloads briefly.
 * Server: always network (SSR stays per-request).
 */
function emptyConfigResponse(message: string): PublicConfigAxios {
  return {
    data: { code: -1, data: [] as PublicConfigItem[], message },
    status: 0,
    statusText: "ERR",
    headers: {},
    config: {} as PublicConfigAxios["config"],
  } as PublicConfigAxios;
}

export function getPublicConfig(): Promise<PublicConfigAxios> {
  if (typeof window === "undefined") {
    if (!hasServerApiBaseURL()) {
      return Promise.resolve(emptyConfigResponse("no SERVER_API_BASE_URL"));
    }
    return request.get("/config/public") as Promise<PublicConfigAxios>;
  }

  const now = Date.now();
  if (clientCache && clientCache.expires > now) {
    return Promise.resolve(clientCache.value);
  }

  if (clientInflight) {
    return clientInflight;
  }

  // Shorter timeout than global 15s — config is non-critical for first paint fallbacks
  clientInflight = (request.get("/config/public", {
    timeout: 4000,
  }) as Promise<PublicConfigAxios>)
    .then((res) => {
      clientCache = { expires: Date.now() + CLIENT_TTL_MS, value: res };
      return res;
    })
    .catch((err) => {
      const empty = emptyConfigResponse("config unavailable");
      clientCache = { expires: Date.now() + NEGATIVE_TTL_MS, value: empty };
      console.warn("getPublicConfig failed, using empty cache:", err?.message || err);
      return empty;
    })
    .finally(() => {
      clientInflight = null;
    });

  return clientInflight;
}

/** Drop client cache (e.g. after admin updates). */
export function invalidatePublicConfigCache() {
  clientCache = null;
  clientInflight = null;
}

export async function fetchPublicConfigForServer(init?: Parameters<typeof fetch>[1]) {
  const url = getServerApiURL("/config/public");
  if (!url) {
    return { code: -1, data: [] as PublicConfigItem[], message: "no SERVER_API_BASE_URL" };
  }
  try {
    const response = await fetch(url, {
      ...init,
      // Fail fast on Vercel / cold network — UI falls back to local mock data
      signal: init?.signal ?? AbortSignal.timeout(2500),
    });
    return (await response.json()) as PublicConfigBody;
  } catch {
    return { code: -1, data: [] as PublicConfigItem[], message: "config fetch failed" };
  }
}
