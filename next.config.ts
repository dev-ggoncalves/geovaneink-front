import type { NextConfig } from "next";

const API_ORIGIN = (
  process.env.API_PROXY_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "https://web-production-c07ea.up.railway.app"
).replace(/\/+$/, "");

const useApiProxy = Boolean(API_ORIGIN) && !/localhost|127\.0\.0\.1/i.test(API_ORIGIN);

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async rewrites() {
    if (!useApiProxy) return [];
    return [
      { source: "/api/:path*", destination: `${API_ORIGIN}/api/:path*` },
      { source: "/media/:path*", destination: `${API_ORIGIN}/media/:path*` },
    ];
  },
};

export default nextConfig;
