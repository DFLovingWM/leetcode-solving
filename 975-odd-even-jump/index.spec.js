const assert = require('assert')
// const solve = require('./dp')
const solve = require('./dp-with-BST')

describe('DP, with O(N) search', () => {
  it('例子1', () => {
    let result = solve([10,13,12,14,15])
    assert.equal(result, 2)
  })

  it('例子2', () => {
    let result = solve([2,3,1,1,4])
    assert.equal(result, 3)
  })

  it('例子3', () => {
    let result = solve([5,1,3,4,2])
    assert.equal(result, 3)
  })
})