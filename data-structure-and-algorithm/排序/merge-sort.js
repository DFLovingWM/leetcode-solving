function mergeSortForLinkedList () {
  // To be continued...
}

/**
 * 归并排序(数组版本)
 */
function mergeSortForArray (arr, L = 0, R = arr.length - 1) {
  if (R - L + 1 <= 1) { // Recursion termination condition: length <= 1, which means a sorted array already.
    return arr.slice(L, R + 1)
  }

  let M = Math.floor((L + R) / 2)

  let leftArr = mergeSortForArray(arr, L, M)
  let rightArr = mergeSortForArray(arr, M + 1, R)

  let mergedArr = []
  let l = 0, r = 0
  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] <= rightArr[r]) { // Non-decreasing order
      mergedArr.push(leftArr[l++])
    } else {
      mergedArr.push(rightArr[r++])
    }
  }
  if (l < leftArr.length) {
    mergedArr.push(...leftArr.slice(l))
  } else {
    mergedArr.push(...rightArr.slice(r))
  }

  return mergedArr
}

module.exports = {
  mergeSortForLinkedList,
  mergeSortForArray
}