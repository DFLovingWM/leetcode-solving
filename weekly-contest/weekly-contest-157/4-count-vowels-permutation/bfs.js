const NEXTS = {
  a: ['e'],
  e: ['a', 'i'],
  i: ['a', 'e', 'o', 'u'],
  o: ['i', 'u'],
  u: ['a']
}

const MOD = Math.pow(10, 9) + 7

/**
 * 从n=1递推，层次遍历
 */
var countVowelPermutation = function (n) {
  let count = new Map()
  for (const ch of 'aeiou') {
    count.set(ch, (count.get(ch) || 0) + 1)
  }

  for (let i = 2; i <= n; ++i) {
    let nextCount = new Map()

    for (const curr of count.keys()) {
      for (const next of NEXTS[curr]) {
        nextCount.set(next, ((nextCount.get(next) || 0) + count.get(curr)) % MOD)
      }
    }

    count = nextCount
  }

  return Array.from(count.values()).reduce((a, b) => (a + b) % MOD, 0)
};

module.exports = countVowelPermutation