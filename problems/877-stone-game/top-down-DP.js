/**
 * Top-down DP
 * 
 * 时间：`O(N^2)`, 460ms
 */
var stoneGame = function (piles) {
  const cache = new Map()

  function helper (left, right) {
    if (right - left + 1 === 0) return 0 // 没石头可以拿了，表示游戏结束

    const key = `${left},${right}`
    if (cache.has(key)) return cache.get(key)

    const res = Math.max(
      piles[left] - helper(left + 1, right), // 拿头
      piles[right] - helper(left, right - 1) // 拿尾
    )
    cache.set(key, res)
    return res
  }

  return helper(0, piles.length - 1) > 0
};

module.exports = stoneGame