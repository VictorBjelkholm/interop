'use strict'

const createServer = require('ipfsd-ctl').createServer
const parallel = require('async/parallel')
const rendezvous = require('libp2p-websocket-star-rendezvous')

let rzserver

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
    captureTimeout: 500 * 1000,
    // browserDisconnectTolerance: 3, //this one helps
    browserDisconnectTimeout: 500 * 1000,
    browserNoActivityTimeout: 500 * 1000,
  },
  hooks: {
    pre: (done) => {
      parallel([
        (cb) => server.start(cb),
        (cb) => {
          rendezvous.start({port: 24642}, (err, _rzserver) => {
            if (err) {
              return done(err)
            }
            rzserver = _rzserver
            cb()
          })
        }
      ], done)
    },
    post: (done) => {
      parallel([
        (cb) => server.stop(cb),
        (cb) => rzserver.stop(cb)
      ], done)
    }
  }
}
