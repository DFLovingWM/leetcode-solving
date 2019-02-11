const assert = require('assert')
const solve = require('./index')

describe('求相同degree的最短子数组的长度', () => {
  it('1', () => {
    let input = [1, 2, 2, 3, 1]
    assert.equal(solve(input), 2)
  })

  it('2', () => {
    let input = [1,2,2,3,1,4,2]
    assert.equal(solve(input), 6)
  })
})