const assert = require('assert')
const permuteUnique = require('./dfs')

describe('47', () => {
  it('1', () => {
    let ret = permuteUnique([1,1,2])
    assert.deepEqual(ret, [
      [1,1,2],
      [1,2,1],
      [2,1,1]
    ])
  })

  it('2', () => {
    let ret = permuteUnique([3,3,0,3])
    assert.deepEqual(ret, [
      [0,3,3,3],[3,0,3,3],[3,3,0,3],[3,3,3,0]
    ])
  })
})