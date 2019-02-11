const assert = require('assert')
const solve = require('./dp')

describe('求最大线段和', () => {
  it('常规', () => {
    let input = [-2,1,-3,4,-1,2,1,-5,4]
    assert.equal(solve(input), 6)
  })

  it('有重复起点', () => {
    let input = [3,-2,-3,-3,1,3,0]
    assert.equal(solve(input), 4)
  })
})