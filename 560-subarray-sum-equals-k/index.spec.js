const assert = require('assert')
const solve = require('./prefix-sum-with-hash')

describe('前缀和', () => {
  it('题目例子', () => {
    let nums = [1,1,1], k = 2
    let result = solve(nums, k)
    assert.equal(result, 2)
  })
})