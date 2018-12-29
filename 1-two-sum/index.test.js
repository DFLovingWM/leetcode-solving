const assert = require('assert')
const { twoSum } = require('./complement')

describe(`正确性`, () => {
  it(`题目例子`, () => {
    assert.equal( twoSum([7, 9, 3, 2], 11), [1, 3] )
  })
})