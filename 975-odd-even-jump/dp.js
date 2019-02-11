/**
 * Right-left DP, with O(N) to find next larger/smaller LINEARLY
 * Time complexity: O(N2)
 * Actual time cost: [6636ms]
 */
var oddEvenJumps = function (arr) {
  const length = arr.length

  let higher = Array.from({ length }, _ => false),
      lower = Array.from({ length }, _ => false)

  higher[length - 1] = lower[length - 1] = true // The end point

  for (let i = arr.length - 2; i >= 0; --i) { // reverse DP
    let nextLargeIndex = findNextLarger(arr, arr[i], i + 1)
    if (nextLargeIndex !== -1) {
      higher[i] = lower[nextLargeIndex]
    }

    let nextSmallerIndex = findNextSmaller(arr, arr[i], i + 1)
    if (nextSmallerIndex !== -1) {
      lower[i] = higher[nextSmallerIndex]
    }
  }

  return higher.filter(item => item).length
}

// Time complexity; O(N)
function findNextLarger (arr, pivot, fromIndex) {
  let targetIndex = -1
  for (let i = fromIndex; i < arr.length; ++i) {
    if (
      arr[i] >= pivot &&
      (targetIndex === -1 || arr[i] < arr[targetIndex])
    ) {
      targetIndex = i
    }
  }
  return targetIndex
}

// Time complexity: same as above
function findNextSmaller (arr, pivot, fromIndex) {
  let targetIndex = -1
  for (let i = fromIndex; i < arr.length; ++i) {
    if (
      arr[i] <= pivot &&
      (targetIndex === -1 || arr[i] > arr[targetIndex])
    ) {
      targetIndex = i
    }
  }
  return targetIndex
}

module.exports = oddEvenJumps