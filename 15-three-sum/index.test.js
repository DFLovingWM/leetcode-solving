const { threeSum } = require('./two-pointer')
const assert = require('assert')

describe(`测试正确性`, () => {
  it(`题目例子`, () => {
    assert.deepEqual(threeSum([-2,0,0,2,2]), [[-2, 0, 2]])
  })
})
