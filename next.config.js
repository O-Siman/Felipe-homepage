// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/Felipe-homepage/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true
}

