/**
 * 前缀和 + 单调栈
 * 参考：https://leetcode.com/problems/longest-well-performing-interval/discuss/335163/O(N)-Without-Hashmap.-Generalized-ProblemandSolution%3A-Find-Longest-Subarray-With-Sum-greater-K.
 * 
 * 时间：`O(N)`, 84ms
 */
var longestWPI = function (hours) {
  let acc = 0
  const prefix = [acc]
  for (const hour of hours) {
    acc += hour > 8 ? 1 : -1
    prefix.push(acc)
  }

  const stack = [] // 栈（单调递减，但存储下标）
  for (let i = 0; i < prefix.length; ++i) {
    if (stack.length === 0 || prefix[i] < prefix[stack[stack.length - 1]]) { // 保存更优的left
      stack.push(i)
    }
  }

  let res = 0
  for (let j = prefix.length - 1; j >= 1; --j) { // 从最优的right开始找起（故逆序）
    while (stack.length > 0 && prefix[j] > prefix[stack[stack.length - 1]]) {
      res = Math.max(res, j - stack[stack.length - 1]) // 更新答案
      stack.pop() // 因为j递减，长度变小，所以没有必要保留这个i（需要更小的i）
    }
  }

  return res
};

module.exports = longestWPI