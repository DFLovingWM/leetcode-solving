const assert = require('assert')
const { maxArea } = require('./index')

describe(`测试结果正确性`, () => {
  it(`题目例子`, () => {
    assert.equal( maxArea([1,8,6,2,5,4,8,3,7]), 49 )
  })
})
