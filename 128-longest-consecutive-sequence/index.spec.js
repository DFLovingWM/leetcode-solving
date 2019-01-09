const longestConsecutive = require('./hash')
const assert = require('assert')

describe(`128`, () => {
  it(`(1)`, () => {
    const result = longestConsecutive([100, 4, 200, 1, 3, 2])
    assert(result === 4)
  })
})