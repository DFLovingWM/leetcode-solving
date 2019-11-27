/**
 * Top-down DP
 * 
 * 时间：`O(N^3)`, 136ms
 */
var mctFromLeafValues = function (arr) {
  const n = arr.length

  // 预处理：区间的最大值
  const max = Array.from({ length: n }, () => Array.from({ length: n }, () => -Infinity))
  for (let i = 0; i < n; ++i) {
    max[i][i] = arr[i]
    for (let j = i + 1; j < n; ++j) {
      max[i][j] = Math.max(max[i][j - 1], arr[j])
    }
  }

  const cache = new Map()

  // 递归函数：区间[left,right]生成树的最小代价
  function helper (left, right) {
    if (left === right) return 0
    
    const key = left * 40 + right
    if (cache.has(key)) return cache.get(key)

    let res = Infinity
    for (let k = left; k < right; ++k) { // 遍历分界点：[left, right)
      const tmp = max[left][k] * max[k + 1][right] + helper(left, k) + helper(k + 1, right)
      res = Math.min(res, tmp)
    }
    cache.set(key, res)
    return res
  }

  return helper(0, n - 1)
};

module.exports = mctFromLeafValues