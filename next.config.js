/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/oecd',
  assetPrefix: '/oecd',
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig
