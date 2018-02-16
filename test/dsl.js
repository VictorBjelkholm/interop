const { test } = require('./utils/test')
const assert = require('assert')
// const {
//   assertRightPeers,
//   assertGetFile,
//   assertCatFile,
//   assertGetDirectory
// } = require('./assertions')

const combinations = ['go', 'js']

test('nodes can connect', combinations, async (done, nodes) => {
  const nodeA = nodes[0]
  const nodeB = nodes[0]
  await nodeA.connect(nodeB.address)
  nodeA.swarm.peers(done)
}, /* assertions */ (err, peers) => {
  assert.equal(err, null)
})

// test('nodes can cat file', combinations, async (done, nodes) => {
//   const nodeA = nodes[0]
//   const nodeB = nodes[0]
//   const file = await nodeA.addFile()
//   nodeB.catFile(file)
// }, /* assertions */ (err, peers) => {
//   assert.equal(err, null)
// })
// test('nodes can get file', combinations, async (done, nodes) => {
//   const nodeA = nodes[0]
//   const nodeB = nodes[0]
//   const file = await nodeA.addFile()
//   nodeB.getFile(file)
// }, /* assertions */ (err, peers) => {
//   assert.equal(err, null)
// })
// test('nodes can get directory', combinations, async (done, nodes) => {
//   const nodeA = nodes[0]
//   const nodeB = nodes[0]
//   const directory = await nodeA.addDirectory()
//   nodeB.getDirectory(directory)
// }, /* assertions */ (err, peers) => {
//   assert.equal(err, null)
// })
