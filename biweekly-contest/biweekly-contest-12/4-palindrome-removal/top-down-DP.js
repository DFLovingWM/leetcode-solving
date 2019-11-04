/**
 * Top-down DP
 */
var minimumMoves = function (arr) {
  const n = arr.length
  const cache = Array.from({ length: n }, () => Array.from({ length: n }, () => -1))
  
  function helper (left, right) {
    if (left > right) return 0

    if (cache[left][right] !== -1) return cache[left][right]

    let res = right - left + 1
    for (let i = left; i <= right; ++i) {
      if (arr[i] === arr[left]) {
        const tmp = Math.max(helper(left + 1, i - 1), 1) + helper(i + 1, right)
        res = Math.min(res, tmp)
      }
    }
    return cache[left][right] = res
  }

  return helper(0, arr.length - 1)
};

module.exports = minimumMoves