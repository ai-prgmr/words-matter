import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/words-matter",
  output: "export",
  images: {
    minimumCacheTTL: 31536000, // 1 year in seconds
  },
};

export default nextConfig;
