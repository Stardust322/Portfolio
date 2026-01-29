import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 배포 시 TypeScript 에러 무시 (이건 유지)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
  },
};

export default nextConfig;
