/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // static HTML export for GitHub Pages
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
