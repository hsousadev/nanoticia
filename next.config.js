/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
};

module.exports = nextConfig;
