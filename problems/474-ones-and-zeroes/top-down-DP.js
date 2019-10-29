/**
 * Top-down DP
 * 
 * 时间：O(N^3), 1600ms
 * 空间：O(N^3), 155.7MB
 */
var findMaxForm = function (words, m, n) {
  // 提前数好有多少个0、1
  words = words.map(word => {
    let one = 0, zero = 0
    for (const ch of word) {
      if (ch === '0') {
        ++zero
      } else {
        ++one
      }
    }
    return [zero, one]
  })

  const cache = new Map()

  function getKey (i, numOfZero, numOfOne) {
    return `${i}, ${numOfZero}, ${numOfOne}`
  }

  function helper (i, numOfZero, numOfOne) {
    if (i === words.length) return 0

    const key = getKey(i, numOfZero, numOfOne)
    if (cache.has(key)) return cache.get(key)

    let [zero, one] = words[i]
    let res = helper(i + 1, numOfZero, numOfOne) // 不买
    if (numOfOne >= one && numOfZero >= zero) { // 能买，才买
      const buy = 1 + helper(i + 1, numOfZero - zero, numOfOne - one)
      res = Math.max(res, buy)
    }
    cache.set(key, res)
    return res
  }

  return helper(0, m, n)
};

module.exports = findMaxForm