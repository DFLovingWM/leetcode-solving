/**
 * Binary search.
 * - Time: O(NlogN), 68ms
 * - Space: O(1), 35.1MB
 */
var intersection = function(A, B) {
  A.sort((a, b) => a - b)
  B.sort((a, b) => a - b)

  let result = []
  for (let i = 0; i < A.length; ++i) {
    if (i > 0 && A[i] === A[i - 1]) continue // Avoid repeats.
    if (binarySearch(B, A[i])) {
      result.push(A[i])
    }
  }

  return result
};

/**
 * Search an element in a sorted array.
 * @returns {boolean} Whether it can be found.
 */
function binarySearch (arr, target) {
  let left = 0,
      right = arr.length - 1

  while (left <= right) {
    let center = Math.floor((left + right) / 2),
        centerElement = arr[center]

    if (centerElement === target) {
      return true
    } else if (target > centerElement) {
      left = center + 1
    } else {
      right = center - 1
    }
  }

  return false
}

[
  [[1], [1]],
  [[1,2,2,1], [2, 2]],
  [[4,9,5], [9,4,9,8,4]]
].forEach(input => {
  console.log(intersection(...input))
})