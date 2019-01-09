const assert = require('assert')
const powerfulIntegers = require('./brute-force')

describe('970', () => {
  it('例子1', () => {
    assert.deepEqual(powerfulIntegers(2, 3, 10), [2,3,4,5,7,9,10])
  })

  it('例子2', () => {
    assert.deepEqual(powerfulIntegers(3, 5, 15), [2,4,6,8,10,14])
  })

  it('边界情况(有1)', () => {
    assert.deepEqual(powerfulIntegers(1, 1, 10), [2])
    assert.deepEqual(powerfulIntegers(1, 2, 3), [2, 3])
  })
})