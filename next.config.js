/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  basePath: "/genomics-preview",
  assetPrefix: "/genomics-preview",
};

module.exports = nextConfig;
