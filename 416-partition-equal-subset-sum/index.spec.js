const assert = require('assert')
const canPartition = require('./backpack-zero-one')
const canPartition2 = require('./bits')

describe(`416`, () => {
  it(`背包法`, () => {
    assert( canPartition([1, 2, 3, 4]) )
    assert( !canPartition([1, 2, 3, 5]) )
    assert( canPartition([1, 5, 11, 5]) )
  })

  it(`bit法`, () => {
    assert( !canPartition2([1, 2, 5]) )
  })
})