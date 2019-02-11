const assert = require('assert')
const solve = require('./dp')

describe('983', () => {
  it('题目例子1', () => {
    let result = solve([2,1,3])
    assert.equal(result, 12)
  })
})