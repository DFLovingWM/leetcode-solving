/**
 * Top-down DP
 * 
 * 时间：O(N^2), 1220ms
 */
var probabilityOfHeads = function (probs, targetUp) {
  const cache = new Map()
  const n = probs.length

  function getKey(i, up) {
    return `${i}, ${up}`
  }

  // 递归函数：选第i个骰子，之前有up个向上的概率
  function dfs(i, up) {
    if (i === probs.length) return 1 // 选完了

    const key = getKey(i, up)
    if (cache.has(key)) return cache.get(key)

    let res = 0
    if (up + 1 <= targetUp) { // 如果还能选up（up没选够）
      res += probs[i] * dfs(i + 1, up + 1) // 选up
    }
    if (n - i - 1 + up >= targetUp) { // 如果还能选down（选了down，剩下的全选up必须超过targetUp）
      res += (1 - probs[i]) * dfs(i + 1, up) // 选down
    }
    cache.set(key, res)
    return res
  }

  return dfs(0, 0)
};

module.exports = probabilityOfHeads