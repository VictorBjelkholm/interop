'use strict'

const createServer = require('ipfsd-ctl').createServer

const server = createServer()
module.exports = {
  karma: {
    files: [{
      pattern: 'test/fixtures/**/*',
      watched: false,
      served: true,
      included: false
    }],
    singleRun: true,
    browserNoActivityTimeout: 100 * 1000
  },
  hooks: {
    browser: {
      pre: server.start.bind(server),
      post: server.stop.bind(server)
    }
  }
}
