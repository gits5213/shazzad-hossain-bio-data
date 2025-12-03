import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = '/shazzad-hossain-bio-data';

const nextConfig: NextConfig = {
  output: 'export',
  ...(isGitHubPages && { basePath }),
  ...(isGitHubPages && { trailingSlash: true }),
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
