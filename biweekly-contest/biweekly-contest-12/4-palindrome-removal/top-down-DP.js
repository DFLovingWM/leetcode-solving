/**
 * Top-down DP
 */
var minimumMoves = function (arr) {
  const n = arr.length
  const cache = Array.from({ length: n }, () => Array.from({ length: n }, () => -1))

  function helper(left, right) {
    if (left > right) return 0
    if (cache[left][right] !== -1) return cache[left][right]

    let res = right - left + 1
    for (let i = left; i <= right; ++i) {
      // 相等时，两个元素可以跟[left + 1, i - 1]中的某个回文数（一定存在）一起删除
      // 而当[left + 1, i - 1]为空时，删除arr[i]、arr[left]这一对，次数至少为1
      if (arr[i] === arr[left]) {
        const tmp = Math.max(1, helper(left + 1, i - 1)) + helper(i + 1, right)
        res = Math.min(res, tmp)
      }
    }
    return cache[left][right] = res
  }

  return helper(0, arr.length - 1)
};

module.exports = minimumMoves