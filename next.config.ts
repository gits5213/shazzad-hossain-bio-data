import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // If your repo name is not the root, uncomment and set the basePath
  // basePath: '/ShazzadHossainBioData',
  // trailingSlash: true,
};

export default nextConfig;
