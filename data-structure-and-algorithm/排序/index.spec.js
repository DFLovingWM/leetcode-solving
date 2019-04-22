const assert = require('assert')
// const { insertionSort: sort } = require('./insertion-sort')
// const { insertionSortInPlace: sort } = require('./insertion-sort')
// const sort = require('./selection-sort')
// const sort = require('./bubble-sort')
// const sort = require('./quick-sort-v1')
// const sort = require('./quick-sort-v2')
// const sort = require('./quick-sort-v2-old')
// const sort = require('./heap-sort')
const { mergeSortForArray: sort } = require('./merge-sort')


describe('测试排序', () => {
  it('随机数组，并可能有重复元素', () => {
    let sampleCount = 5
    while (sampleCount--) {
      const array = getRandomArr(10, -5, 5)

      let arr1 = array.slice()
      arr1 = sort(arr1)

      let arr2 = [...array]
      arr2.sort((a, b) => a - b)

      assert.deepEqual(arr1, arr2)
    }
  })

  it('空数组', () => {
    let arr = []
    arr.sort((a, b) => a - b)

    let arr2 = []
    sort(arr2)

    assert.deepEqual(arr, arr2)
  })

  it('1个元素', () => {
    let arr = [-1]
    arr.sort((a, b) => a - b)

    let arr2 = [-1]
    sort(arr2)

    assert.deepEqual(arr, arr2)
  })

  it('不需要排序的情况', () => {
    let arr = [-1, -1, 0, 0, 1, 2, 3]
    let arr2 = arr.slice()

    arr.sort((a, b) => a - b)
    sort(arr2)

    assert.deepEqual(arr, arr2)
  })
})


function getRandomArr (length, min, max) {
  let ret = []
  while (length--) {
    let rand = Math.floor(Math.random() * (max - min + 1)) + min
    ret.push(rand)
  }
  return ret
}