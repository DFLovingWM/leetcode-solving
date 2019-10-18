const NEXTS = {
  a: ['e'],
  e: ['a', 'i'],
  i: ['a', 'e', 'o', 'u'],
  o: ['i', 'u'],
  u: ['a']
}

const MOD = Math.pow(10, 9) + 7

/**
 * Top-down DP
 */
var countVowelPermutation = function (n) {
  const cache = new Map()

  // 记忆化的hashKey
  function getKey (vowel, n) {
    return `${vowel}, ${n}`
  }

  // 递归函数
  function helper (prev, rest) {
    if (rest === 0) return 1 // 结束，返回这个组合数即1

    const key = getKey(prev, rest)
    if (cache.has(key)) return cache.get(key)

    let res = 0
    for (const curr of NEXTS[prev]) {
      res = (res % MOD + helper(curr, rest - 1) % MOD) % MOD
    }
    cache.set(key, res)
    return res
  }

  let res = 0
  for (const vowel of Object.keys(NEXTS)) {
    res = (res % MOD + helper(vowel, n - 1) % MOD) % MOD
  }
  return res
};

module.exports = countVowelPermutation