var merge = require('webpack-merge')
var prodEnv = require('./test.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
