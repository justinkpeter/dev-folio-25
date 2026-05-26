import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.4.27"],
  sassOptions: {
    loadPaths: ["./src/app"],
  },
};

export default nextConfig;
