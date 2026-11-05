import fs from "fs";
import path from "path";

/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = "";
let assetPrefix = "";

// Check if a custom domain CNAME exists in public or root
const hasCustomDomain =
  fs.existsSync(path.join(process.cwd(), "public", "CNAME")) ||
  fs.existsSync(path.join(process.cwd(), "CNAME"));

if (isGithubActions && !hasCustomDomain) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") || "";
  if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
    basePath = process.env.NEXT_PUBLIC_BASE_PATH;
    assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : "";
  } else if (repo && !repo.endsWith(".github.io")) {
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
  }
}

const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
