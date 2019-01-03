const assert = require('assert')
const numsSameConsecDiff = require('./iterative')

describe(`967`, () => {
  it(`一般情况`, () => {
    const N = 3, K = 3
    const result = numsSameConsecDiff(N, K)
    assert.deepEqual(result, [
      141, 147,
      252, 258,
      303, 363, 369,
      414, 474,
      525, 585,
      630, 636, 696,
      741, 747,
      852, 858,
      963, 969
    ])
  })

  it(`边界情况`, () => {
    assert.deepEqual(numsSameConsecDiff(1, 0), [0,1,2,3,4,5,6,7,8,9])
  })
})