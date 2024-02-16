/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true
}

const path = require('path')
const loaderUtils = require('loader-utils')

/**
 * Stolen from https://stackoverflow.com/questions/10776600/testing-for-equality-of-regular-expressions
 */
const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  )
}

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}`
      ),
      'md4',
      'base64',
      6
    )
    .replace(/[^a-zA-Z0-9-_]/g, '_')
    .replace(/^(-?\d|--)/, '_$1')

// Overrides for css-loader plugin
function cssLoaderOptions(modules, dev) {
  // const { getLocalIdent, ...others } = modules // Need to delete getLocalIdent else localIdentName doesn't work
  const _ = {
    ...modules,
    exportLocalsConvention: 'camelCase',
    mode: 'local'
  }
  if (!dev) {
    _.getLocalIdent = hashOnlyIdent
  }
  return _
}

module.exports = {
  experimental: {
    serverActions: true
  },

  webpack(config, options) {
    const oneOf = config.module.rules.filter(
      (rule) => typeof rule.oneOf === 'object'
    )

    if (oneOf.length > 0) {
      oneOf.forEach((oo) => {
        // Find the module which targets *.scss|*.sass files
        const moduleSassRule = oo.oneOf.find((rule) =>
          regexEqual(rule.test, /\.module\.(scss|sass)$/)
        )

        if (moduleSassRule) {
          // Get the config object for css-loader plugin
          const cssLoader = moduleSassRule.use.filter(({ loader }) =>
            loader?.includes('css-loader')
          )

          if (cssLoader.length > 0) {
            cssLoader.forEach((lodder) => {
              lodder.options = {
                ...lodder.options,
                modules: cssLoaderOptions(lodder.options.modules, options.dev)
              }
            })
          }
        }
      })
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}
