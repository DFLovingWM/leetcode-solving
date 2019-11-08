/**
 * 插入排序
 * O(N)空间复杂度实现
 */
function insertionSort (arr) {
  let sortedList = []

  for (const n of arr) {
    // 寻找插入的位置(目标位置)
    let i = 0
    while (i < sortedList.length && n >= sortedList[i]) { // 这里的>=不是>，为了保证stable
      ++i
    }
    // 目标位置后面的元素需要依次让位
    for (let j = sortedList.length - 1; j >= i; --j) { // 注意是逆序
      sortedList[j + 1] = sortedList[j]
    }
    // 插入目标位置
    sortedList[i] = n
  }

  return sortedList
}

/**
 * 插入排序
 * O(1)空间复杂度实现
 * 即原地修改(in place)
 */
function insertionSortInPlace (arr) {
  for (let i = 1; i < arr.length; ++i) {
    let temp = arr[i],
        pos = i - 1
    // 寻找应插入的位置
    while (pos >= 0 && temp < arr[pos]) --pos
    ++pos
    // 挪动其后到位置(i-1)之间的元素(逆序)
    for (let j = i - 1; j >= pos; --j) {
      arr[j + 1] = arr[j]
    }
    // 插入目标元素
    arr[pos] = temp
  }

  return arr
}

module.exports = {
  insertionSort,
  insertionSortInPlace
}