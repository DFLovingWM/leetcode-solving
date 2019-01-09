const assert = require('assert')
// const canPartition = require('./backpack-zero-one')
// const canPartition = require('./bits')
const canPartition = require('./generating-function')

describe(`416`, () => {
  it(`例子1`, () => {
    assert( canPartition([1, 2, 3, 4]) )
    // assert( !canPartition([1, 2, 3, 5]) )
    // assert( canPartition([1, 5, 11, 5]) )
  })

  // it(`例子2`, () => {
  //   assert( !canPartition2([1, 2, 5]) )
  // })
})