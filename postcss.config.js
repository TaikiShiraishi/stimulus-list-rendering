module.exports = ctx => {
  return {
    map: {
      sourcesContent: true,
      annotation: true
    },
    syntax: 'postcss-scss',
    plugins: {
      '@csstools/postcss-sass': {},
      autoprefixer: { grid: true },
      csswring: ctx.env === 'production' ? {} : false,
      'postcss-object-fit-images': {}
    }
  }
}
