/**
 * @param {number[]} arr
 * @return {number}
 */
var largestPerimeter = function(arr) {
  arr.sort((a, b) => a - b)

  let i = arr.length - 3,
      j = arr.length - 2,
      k = arr.length - 1

  for (; i >= 0; --i, --j, --k) {
    if (arr[i] + arr[j] > arr[k]) { // can form a triangle
      return arr[i] + arr[j] + arr[k]
    }
  }

  return 0
}