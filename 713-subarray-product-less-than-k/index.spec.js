const assert = require('assert')
const solve = require('./prefix-sum-plus-binary-search')

describe('713', () => {
  it('题目例子', () => {
    let nums = [10, 5, 2, 6], k = 100
    let result = solve(nums, k)
    assert.equal(result, 8)
  })
})