import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
