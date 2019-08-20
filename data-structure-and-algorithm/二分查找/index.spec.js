const assert = require('assert')
const {
  bisectLeft,
  bisectRight
} = require('./recursion')

function left (arr, target) {
  return bisectLeft(arr, 0, arr.length, target)
}

function right (arr, target) {
  return bisectRight(arr, 0, arr.length, target)
}

const find = left

describe('测试二分查找', () => {
  it('存在一个', () => {
    const arr = [1, 3, 5]
    assert.equal( find(arr, 3), 1 )
  })

  it('存在重复', () => {
    const arr = [1, 3, 5, 5]
    assert.equal( left(arr, 5), 2 )
    assert.equal( right(arr, 5), 4 )
  })

  it('不存在', () => {
    const arr = [1, 3, 5, 7, 9]
    assert.equal( left(arr, 2), 1 )
    assert.equal( right(arr, 2), 1 )
  })
})
