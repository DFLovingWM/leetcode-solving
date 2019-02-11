const assert = require('assert')
const solve = require('./first-optimal')

describe('338', () => {
  it('一般例子', () => {
    assert.deepEqual(
      solve(2),
      [0,1,1]
    )

    assert.deepEqual(
      solve(5),
      [0,1,1,2,1,2]
    )
  })
})