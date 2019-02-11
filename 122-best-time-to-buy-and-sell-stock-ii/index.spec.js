const assert = require('assert')
const solve = require('./peak-valley')

describe('2-segment problem', () => {
  it('1', () => {
    let input = [7,1,5,3,6,4]
    assert.equal(solve(input), 7)
  })

  it('2', () => {
    let input = [1,2,3,4,5]
    assert.equal(solve(input), 4)
  })

  it('3', () => {
    let input = [7,6,4,3,1]
    assert.equal(solve(input), 0)
  })

  it('边界：空数组', () => {
    assert.equal(solve([]), 0)
  })

  it('刚才WA的', () => {
    let input = [1,2,4,2,5,7, 2,4,9, 0]
    assert.equal(solve(input), 15)
  })
})