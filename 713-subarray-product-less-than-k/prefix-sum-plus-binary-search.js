function numSubarrayProductLessThanK (nums, K) {
  let count = 0,
      accProduct = 1,
      prefixProducts = [accProduct]

  for (const num of nums) {
    let gain = binarySearchLessThan(prefixProducts, K / num)
    console.log(prefixProducts, K/num, gain)
    count += gain

    accProduct *= num
    prefixProducts.push(accProduct)
  }

  return count
}

/**
 * Binary search: return the number of elements less than [pivot].
 */
function binarySearchLessThan (sortedArr, pivot) {
  let L = 0,
      R = sortedArr.length - 1

  while (L < R) {
    let M = Math.floor((L + R) / 2)
    let middle = sortedArr[M]
    if (middle === pivot) {
      return M
    } else if (middle < pivot) {
      L = M + 1
    } else {
      R = M - 1
    }
  }

  return sortedArr[L] <= pivot ? (L + 1) : L
}

module.exports = numSubarrayProductLessThanK