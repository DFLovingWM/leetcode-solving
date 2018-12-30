const assert = require('assert')
const fourSum = require('./recursive-two-pointer')

describe(`1`, () => {
  it(`题目例子`, () => {
    const result = fourSum([1, 0, -1, 0, -2, 2], 0)
    assert.deepEqual(result, [
      [-1,  0, 0, 1],
      [-2, -1, 1, 2],
      [-2,  0, 0, 2]
    ])
  })
})