/**
 * 滑动窗口
 * 时间：O(N), 80ms
 */
var longestOnes = function(A, K) {
  let zeroCount = 0 // 窗口内0的个数
  let [left, right] = [0, 0]
  let res = 0

  while (right < A.length) {
    const newNumber = A[right++]
    if (newNumber === 0) ++zeroCount
    if (zeroCount <= K) { // 能替换所有0
      res = Math.max(res, right - left)
    }
    while (zeroCount > K) { // 不能替换的情况：删除字符
      const oldNumber = A[left++]
      if (oldNumber === 0) --zeroCount
    }
  }

  return res
};

[
  [[1,1,1,0,0,0,1,1,1,1,0], 2],
  [[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3],
].forEach(input => {
  console.log(longestOnes(...input))
})