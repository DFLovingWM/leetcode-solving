const assert = require('assert')
const solve = require('./prefix-product')

describe('功能测试', () => {
  it('一般情况', () => {
    let input = [1,2,3,4]
    let output = solve(input)
    let expected = [24,12,8,6]
    assert.deepEqual(output, expected)
  })
})

describe('边界测试', () => {
  it('0的个数大于1', () => {
    let input = [0,0]
    let output = solve(input)
    let expected = [0,0]
    assert.deepEqual(output, expected)
  })

  it('0的个数为1', () => {
    let input = [1, 2, 0, 3]
    let output = solve(input)
    let expected = [0, 0, 6, 0]
    assert.deepEqual(output, expected)
  })
})