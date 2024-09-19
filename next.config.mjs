/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  optimizeFonts: false,
  // images: {
  //   path: "/",
  // },
  basePath: isProd ? "/Portfolio_New" : "",
  assetPrefix: isProd ? "/Portfolio_New" : "",
};

export default nextConfig;
