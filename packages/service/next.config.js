
const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, '../../'),
  // },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.externals = [...config.externals, 'file-reader']

  //   return config
  // },
}