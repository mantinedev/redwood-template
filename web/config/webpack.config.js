/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config) => {
  const stylesRules = [
    '\\.css$',
    '\\.module\\.css$',
    '\\.scss$',
    '\\.module\\.scss$',
  ]

  config.module.rules[0].oneOf.forEach((rule) => {
    if (stylesRules.includes(rule.test.source)) {
      rule.use.push('postcss-loader')
    }
  })

  return config
}
