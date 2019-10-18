/**
 * 矩阵解法
 * 
 * 时间：O(N), 96ms
 */

const REL = [ // 关系矩阵
  [0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0]
]

const MOD = Math.pow(10, 9) + 7

var countVowelPermutation = function (n) {
  let curr = [1, 1, 1, 1, 1] // 第0层的数量

  for (let i = 1; i < n; ++i) {
    const next = [0, 0, 0, 0, 0] // 下一层数量
    for (let j = 0; j < 5; ++j) {
      for (let k = 0; k < 5; ++k) {
        next[j] = (next[j] + curr[k] * REL[j][k]) % MOD
      }
    }
    curr = next
  }

  let res = 0
  for (let i = 0; i < 5; ++i) {
    // res = (res + curr[i] % MOD) % MOD
    res += curr[i]
  }
  return res
};

module.exports = countVowelPermutation