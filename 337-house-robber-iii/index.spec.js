const assert = require('assert')
const solve = require('./index')

describe('337', () => {
  it('题目例子1', () => {
    assert.equal(solve([1, 2, 3, 1]), 4)
  })

  it('题目例子2', () => {
    assert.equal(solve([2,3,2]), 3)
  })
})