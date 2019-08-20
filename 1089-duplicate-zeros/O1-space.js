/**
 * 题意要求原地修改，联想到也许可以将空间复杂度优化到`O(1)`
 * 思路：2次循环：
 * 1. 数0的个数
 * 2. 从后往前写数据
 * 可参考：https://leetcode.com/problems/duplicate-zeros/discuss/312727/JavaC%2B%2B-Space-O(1)
 */
var duplicateZeros = function(arr) {
  let zeroCount = arr.reduce((count, item) => count += (item === 0 ? 1 : 0), 0)
  let n = arr.length
  let j = n + zeroCount - 1

  for (let i = n - 1; i >= 0; --i) {
    if (j < n) {
      arr[j] = arr[i]
    }
    --j

    // 如果是0，额外再退一步
    if (arr[i] === 0) {
      if (j < n) {
        arr[j] = 0
      }
      --j
    }
  }

  return arr
};

[
  [1,0,2,3,0,4,5,0],
  [1,2,3],
  [0,0,0,0,0,0,0],
  [8,4,5,0,0,0,0,7],
].forEach(arr => {
  console.log(duplicateZeros(arr))
})

// 8 4 5 0 0 0 0 7
// 8 4 5 0 0 0 0 0 0 0 0 7
