import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/Photography_Portfolio_2025' : '',
  assetPrefix: isProd ? '/Photography_Portfolio_2025' : '',
};

export default nextConfig;
