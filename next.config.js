/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/eve-fleet-analyzer/' : '',
  basePath: isProd ? '/eve-fleet-analyzer' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;
