const { nextI18NextRewrites } = require('next-i18next/rewrites')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')

const isProd = process.env.NODE_ENV === 'production'

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
}

const localeSubpaths = {}

module.exports = withLess(withSass({
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  lessLoaderOptions: {
    javascriptEnabled: true
  }
}))