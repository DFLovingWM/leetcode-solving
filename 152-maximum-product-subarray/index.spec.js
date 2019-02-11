const assert = require('assert')
const solve = require('./dp')

describe('功能测试', () => {
  it('1', () => {
    let input = [2,3,-2,4]
    assert.equal(solve(input), 6)
  })

  it('2', () => {
    let input = [-2,0,-1]
    assert.equal(solve(input), 0)
  })

  it('3', () => {
    let input = [-2,3,-4]
    assert.equal(solve(input), 24)
  })
})