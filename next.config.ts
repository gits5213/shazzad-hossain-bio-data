import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  ...(isGitHubPages && { basePath: '/shazzad-hossain-bio-data' }),
  ...(isGitHubPages && { trailingSlash: true }),
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
