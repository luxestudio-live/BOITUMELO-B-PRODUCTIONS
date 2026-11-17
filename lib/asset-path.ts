/**
 * Resolves static asset paths against Next.js basePath (if configured for GitHub Pages / subpaths)
 */
export function getAssetPath(path: string | undefined): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const basePath = rawBasePath.endsWith("/") ? rawBasePath.slice(0, -1) : rawBasePath;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${cleanPath}`;
}
