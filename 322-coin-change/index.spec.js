const assert = require('assert')
const coinChange = require('./dp')

describe('322', () => {
  it('组合中的最少数量', () => {
    assert.equal(coinChange([1,2,5], 11), 3)
  })

  it('没有组合数时，需要返回-1', () => {
    assert.equal(coinChange([2], 3), -1)
  })
})