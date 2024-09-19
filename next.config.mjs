/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  optimizeFonts: false,
};

export default nextConfig;
