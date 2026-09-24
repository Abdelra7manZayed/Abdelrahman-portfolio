import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [32, 48, 64, 96, 128, 192, 256, 384, 512],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
