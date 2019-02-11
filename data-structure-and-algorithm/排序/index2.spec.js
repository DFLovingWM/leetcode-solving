const assert = require('assert')
const sort = require('./index-sort')

describe('非负数排序', () => {
  it('index sort', () => {
    let arr = [7,9,3,2,4,5,3,6,4,0]
    arr = sort(arr)
    let sortedArr = arr.slice().sort()
    assert.deepEqual(arr, sortedArr)
  })
})