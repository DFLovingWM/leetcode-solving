const assert = require('assert')
const canPartition = require('./backpack-zero-one')

describe(`背包解法`, () => {
  it(`题目例子`, () => {
    assert( canPartition([1, 2, 3, 4]) )
    assert( !canPartition([1, 2, 3, 5]) )
    assert( canPartition([1, 5, 11, 5]) )
  })
})