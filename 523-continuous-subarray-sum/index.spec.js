const assert = require('assert')
const solve = require('./prefix-sum-optimal.js')

describe('前缀和', () => {
  it('例子1：等于(1倍)', () => {
    let nums = [23, 2, 4, 6, 7],  k=6
    let result = solve(nums, k)
    assert.equal(result, true)
  })

  it('例子2：等于N倍(N > 1)', () => {
    let nums = [23, 2, 6, 4, 7],  k=6
    let result = solve(nums, k)
    assert.equal(result, true)
  })

  it('例子3：长度需要大于2', () => {
    let nums = [1, 2, 3, 4],  k=4
    let result = solve(nums, k)
    assert.equal(result, false)
  })

  it('target为负数', () => {
    let nums = [23,2,4,6,7], k = -6
    let result = solve(nums, k)
    assert.equal(result, true)
  })

  it('target为0', () => {
    let nums = [23,2,0,6,7], k = 0
    let result = solve(nums, k)
    assert.equal(result, false)
  })

  it('连续为0，且target为0', () => {
    let nums = [23,2,0, 0, 7], k = 0
    let result = solve(nums, k)
    assert.equal(result, true)
  })

  it('[0,0]', () => {
    let nums = [0,0], k = -1
    let result = solve(nums, k)
    assert.equal(result, true)
  })

  it('target很大', () => {
    let nums = [0,7,5,5,6,2,1,3,3,5,0,0,4,4,7,1,5,3,2,4,7], k = -2147483640
    let result = solve(nums, k)
    assert.equal(result, true)
  })
})