/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'eve-fleet-analyzer';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
  // This is important for GitHub Pages
  trailingSlash: true,
  // Disable automatic static optimization
  experimental: {
    images: {
      unoptimized: true,
    }
  }
};

module.exports = nextConfig;