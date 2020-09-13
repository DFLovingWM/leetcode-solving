const {
  heapify,
  heapPop
} = require('./index')

/**
 * 堆排序
 */
export.heapSort = function (arr) {
  arr = heapify(arr)
  let ret = []
  while (arr.length) {
    ret.push(heapPop(arr))
  }
  return ret
}
