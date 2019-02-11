const assert = require('assert')
const solve = require('./dp')

describe('174', () => {
  it('一般例子', () => {
    assert.equal(
      solve([[1,2,3],[4,5,6],[7,8,9]]),
      12
    )
  })
})