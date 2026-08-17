/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — export a plain `out/` folder Cloudflare Pages serves
  // directly. No server/adapter (drops the flaky @cloudflare/next-on-pages).
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // No image-optimization server in a static export.
    unoptimized: true,
  },
  // NOTE: security headers now live in public/_headers (headers() needs a
  // server and is ignored by output: "export").
};

export default nextConfig;
