import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-3ab869f41a944b30b62d60600e1c0b62.r2.dev",
      },
    ],
  },
};

export default nextConfig;
  