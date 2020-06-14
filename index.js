'use strict'

const createTop = require('process-top')

const process = require('./lib/process')
const os = require('./lib/os')

// const top = createTop()
// const fn = () => ({ ...os(top), ...process(top) })
// console.log(fn());

module.exports = opts => {
  const top = createTop(opts)
  const fn = () => ({ ...os(top), ...process(top) })
  fn.destroy = top.destroy
  return fn
}


