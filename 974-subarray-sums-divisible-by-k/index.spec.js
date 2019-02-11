const assert = require('assert')
const solve = require('./prefix-sum')
// const solve = require('./dfs')

describe('974', () => {
  it('例子', () => {
    let A = [4,5,0,-2,-3,1], K = 5
    assert.equal(solve(A, K), 7)
  })
})