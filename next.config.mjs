import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@shadergradient/react', 'three'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@shadergradient/react': path.resolve(
        __dirname,
        'node_modules/@shadergradient/react/dist/index.mjs'
      ),
    };
    return config;
  },
};

export default nextConfig;
