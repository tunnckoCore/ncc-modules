'use strict'

const { qux } = require('foo')

exports.BAR_PKG = 123

exports.add = (a, b) => {
  return a + b + qux(a, b)
}
