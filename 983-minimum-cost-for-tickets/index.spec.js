const assert = require('assert')
const solve = require('./index')

describe('983', () => {
  it('题目例子1', () => {
    let result = solve([1,4,6,7,8,20], [2,7,15])
    assert.equal(result, 11)
  })

  it('题目例子2', () => {
    let result = solve([1,2,3,4,5,6,7,8,9,10,30,31], [2,7,15])
    assert.equal(result, 17)
  })
})