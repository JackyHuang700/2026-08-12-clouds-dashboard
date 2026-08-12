import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  // For GitHub Pages repo deployment under a subpath
  basePath: '/2026-08-12-clouds-dashboard',
  assetPrefix: '/2026-08-12-clouds-dashboard',
};

export default nextConfig;
