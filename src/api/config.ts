import request, { getServerApiURL } from "./request";
import type { AxiosResponse } from "axios";

type PublicConfigAxios = AxiosResponse<{
  code: number;
  data?: unknown;
  message?: string;
}>;

const CLIENT_TTL_MS = 60_000;
const NEGATIVE_TTL_MS = 5_000;

let clientCache: { expires: number; value: PublicConfigAxios } | null = null;
let clientInflight: Promise<PublicConfigAxios> | null = null;

/**
 * Browser: dedupe in-flight GETs and cache payloads briefly.
 * Server: always network (SSR stays per-request).
 */
export function getPublicConfig(): Promise<PublicConfigAxios> {
  if (typeof window === "undefined") {
    return request.get("/config/public") as Promise<PublicConfigAxios>;
  }

  const now = Date.now();
  if (clientCache && clientCache.expires > now) {
    return Promise.resolve(clientCache.value);
  }

  if (clientInflight) {
    return clientInflight;
  }

  clientInflight = (request.get("/config/public") as Promise<PublicConfigAxios>)
    .then((res) => {
      clientCache = { expires: Date.now() + CLIENT_TTL_MS, value: res };
      return res;
    })
    .catch((err) => {
      // Short negative cache so concurrent mounts do not each wait full axios timeout
      const empty = {
        data: { code: -1, data: [], message: "config unavailable" },
        status: 0,
        statusText: "ERR",
        headers: {},
        config: {} as PublicConfigAxios["config"],
      } as PublicConfigAxios;
      clientCache = { expires: Date.now() + NEGATIVE_TTL_MS, value: empty };
      throw err;
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
  const response = await fetch(getServerApiURL("/config/public"), init);
  return response.json();
}
