/**
 * Top-down DP
 */
var minimumMoves = function (arr) {
  const n = arr.length
  const getKey = (l, r) => l * n + r
  const cache = new Map()
  
  function helper (left, right) {
    // 偶回文初始化
    if (left > right) return 0
    // 奇回文初始化
    if (left === right) return 1

    const key = getKey(left, right)
    if (cache.has(key)) return cache.get(key)

    let res = right - left + 1
    // 遍历分割点
    for (let i = left; i <= right; ++i) {
      let tmp
      if (arr[i] === arr[left]) { // 相等，能省去一对
        tmp = Math.max(1, helper(left + 1, i - 1)) + helper(i + 1, right)
      } else { // 不相等，单独删除要2步
        tmp = helper(left + 1, i - 1) + helper(i + 1, right) + 2
      }
      res = Math.min(res, tmp)
    }
    cache.set(key, res)
    return res
  }

  return helper(0, arr.length - 1)
};

module.exports = minimumMoves