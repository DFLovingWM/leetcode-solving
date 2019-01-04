const assert = require('assert')
const permute = require('./dfs')

describe('46', () => {
  it('例子', () => {
    assert.deepEqual(permute([1,2,3]), [
      [1,2,3],
      [1,3,2],
      [2,1,3],
      [2,3,1],
      [3,1,2],
      [3,2,1]
    ])
  })

  it('边界', () => {
    assert.deepEqual(permute([]), [[]])
    assert.deepEqual(permute([2]), [[2]])
  })
})