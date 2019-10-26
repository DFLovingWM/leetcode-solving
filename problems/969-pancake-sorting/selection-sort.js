/**
 * [68ms]
 * 时间复杂度：O(N2)
 * 而flip的次数最多为 2(N-1)，小于题目限制的 10N
 */
function pancakeSort (arr) {
  let path = []

  for (let i = arr.length - 1; i >= 1; --i) {
    // 找“最”大值max
    const largestIndex = arr.indexOf(i + 1)

    // 先把max扭到head
    flip(arr, largestIndex)
    if (largestIndex + 1 > 1) {
      path.push(largestIndex + 1)
    }

    // 再把max扭到“最”后
    flip(arr, i)
    if (i + 1 > 1) {
      path.push(i + 1)
    }
  }

  return path
}

function flip (arr, index) {
  reverse(arr, 0, index)
}

function reverse (arr, left, right) {
  for (
    let L = left, R = right; // Trick：双指针比单指针更优雅
    L < R;
    ++L, --R
  ) {
    swap(arr, L, R)
  }
}

function swap (arr, i, j) {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
}

// pancakeSort([3,2,4,1])

// module.exports = pancakeSort