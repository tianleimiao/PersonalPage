import type { NextConfig } from "next";

// GitHub project pages: https://<user>.github.io/<repo>/
// Set GITHUB_REPOSITORY=owner/repo in CI; local dev leaves basePath empty.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repoName.endsWith(".github.io");
const inferredBase =
  process.env.BASE_PATH !== undefined
    ? process.env.BASE_PATH
    : repoName && !isUserSite
      ? `/${repoName}`
      : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: inferredBase || undefined,
  images: {
    unoptimized: true,
  },
  // Avoid dev-only "SegmentViewNode" / React Client Manifest errors from segment explorer (Next 15.x).
  experimental: {
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;
