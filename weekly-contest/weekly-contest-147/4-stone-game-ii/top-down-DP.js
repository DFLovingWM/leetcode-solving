/**
 * Top-down DP
 * 
 * 时间：`O(N * M * M)`, 76ms
 */
var stoneGameII = function (piles) {
  // 将石头子数组，处理成后缀和形式（省时间）
  const n = piles.length
  const suffix = new Array(n + 1).fill(0)
  for (let i = n - 1; i >= 0; --i) {
    suffix[i] = suffix[i + 1] + piles[i]
  }
  const cache = new Map()

  function helper (i, M) {
    if (n - i <= 2 * M) return suffix[i] // 如果剩余的可以全部拿走，就全部拿走

    const key = `${i},${M}`
    if (cache.has(key)) return cache.get(key)

    // 枚举连续拿的堆数x
    // 剩余石头数量是固定的，要使当前选手拿的最多、就要使对方拿的最少
    let nextMin = Infinity
    for (let x = 1; x <= 2 * M; ++x) {
      nextMin = Math.min(nextMin, helper(i + x, Math.max(x, M)))
    }
    const currMax = suffix[i] - nextMin
    cache.set(key, currMax)
    return currMax
  }

  return helper(0, 1)
};

[
  [2,7,9,4,4]
].forEach(arr => {
  console.log(stoneGameII(arr))
})