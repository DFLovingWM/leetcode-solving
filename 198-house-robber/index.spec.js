const assert = require('assert')
const solve = require('./dp')

describe('198', () => {
  it('题目例子1', () => {
    assert.equal(solve([1, 2, 3, 1]), 4)
  })

  it('题目例子2', () => {
    assert.equal(solve([2,7,9,3,1]), 12)
  })

  it('WA例子', () => {
    assert.equal(solve([2,1,1,2]), 4)
  })
})