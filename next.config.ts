import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/words-matter",
  allowedDevOrigins: ['705c-49-249-2-114.ngrok-free.app'],
  output: "export",
  images: {
    minimumCacheTTL: 31536000,
    unoptimized: true,
  },
};

export default nextConfig;
