import axios from 'axios'

const browserApiBaseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || '/api').replace(/\/+$/, '')

function getServerApiBaseURL() {
  // Explicit env always wins (self-hosted OpenResty → Java, or a remote API).
  if (process.env.SERVER_API_BASE_URL) {
    return process.env.SERVER_API_BASE_URL.replace(/\/+$/, '')
  }

  // On Vercel there is no colocated Java process — avoid loopback connect timeouts.
  if (process.env.VERCEL) {
    return ''
  }

  // Local / self-host defaults
  return (
    process.env.NODE_ENV === 'production'
      ? 'http://127.0.0.1:8080/api'
      : 'http://localhost:8080/api'
  ).replace(/\/+$/, '')
}

export function getApiBaseURL() {
  if (typeof window !== 'undefined') {
    return browserApiBaseUrl
  }

  return getServerApiBaseURL()
}

export function getServerApiURL(path: string) {
  const base = getServerApiBaseURL()
  if (!base) {
    // Callers on Vercel without API should short-circuit before fetch.
    return ''
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}

/** Whether server-side code should attempt the Java API. */
export function hasServerApiBaseURL() {
  return Boolean(getServerApiBaseURL())
}

const request = axios.create({
  baseURL: getApiBaseURL(),
  timeout: 15000,
})

// Server-side: do not attempt loopback/API when no base is configured (Vercel static mode).
request.interceptors.request.use((config) => {
  if (typeof window === "undefined" && !hasServerApiBaseURL()) {
    return Promise.reject(new Error("no SERVER_API_BASE_URL (static frontend mode)"))
  }
  return config
})

export default request
