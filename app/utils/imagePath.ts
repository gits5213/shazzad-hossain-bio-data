/**
 * Get the correct image path for static assets
 * Handles basePath for GitHub Pages deployment
 */
export function getImagePath(path: string): string {
  if (typeof window === 'undefined') {
    // Server-side: return as-is, Next.js handles basePath during build
    return path;
  }
  
  // Client-side: Check if we're on GitHub Pages
  // basePath is '/shazzad-hossain-bio-data' for GitHub Pages
  const isGitHubPages = window.location.hostname === 'gits5213.github.io' || 
    window.location.pathname.startsWith('/shazzad-hossain-bio-data');
  
  // Only prepend basePath if:
  // 1. We're on GitHub Pages
  // 2. Path starts with '/' (absolute path)
  // 3. Path doesn't already start with basePath
  if (isGitHubPages && path.startsWith('/') && !path.startsWith('/shazzad-hossain-bio-data')) {
    return `/shazzad-hossain-bio-data${path}`;
  }
  
  return path;
}

