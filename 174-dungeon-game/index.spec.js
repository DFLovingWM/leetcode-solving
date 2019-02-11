const assert = require('assert')
const solve = require('./dp')

describe('174', () => {
  it('一般例子', () => {
    assert.equal( solve([[-2,-3,3],[-5,-10,1],[10,30,-5]]), 7 )
  })

  it('边界例子', () => {
    assert.equal( solve([[0]]), 1 )
    assert.equal( solve([[100]]), 1 )
  })

  it('一行', () => {
    assert.equal( solve([[-3,5]]), 4 )
  })

  it('存在两条路径都能走的情况', () => {
    let maze = [[1,-3,3],[0,-2,0],[-3,-3,-3]]
    assert.equal(solve(maze), 3)
  })
})