/**
 * 矩阵快速幂
 * @todo 待DEBUG，MOD那里不对
 * 
 * 时间：O(logN)
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
  let rel = new Matrix(REL)
  rel = pow(rel, n - 1)

  let curr = new Matrix([[1], [1], [1], [1], [1]]) // 初始值

  curr = multiply(rel, curr) // 结果值

  let res = 0
  for (let i = 0; i < 5; ++i) {
    res = (res + curr.get(i, 0)) % MOD
  }
  return res
};

// 矩阵
class Matrix {
  constructor (arr = [[]]) {
    this.arr = arr
  }

  get (i, j) {
    return this.arr[i][j]
  }
}

// 矩阵相乘
function multiply (A, B) {
  A = A.arr
  B = B.arr
  const [m, n] = [A.length, B[0].length]

  const res = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      for (let k = 0; k < A[i].length; ++k) {
        res[i][j] = (res[i][j] + A[i][k] * B[k][j]) % MOD
      }
    }
  }

  return new Matrix(res)
}

// 矩阵(快速)幂
function pow (A, n) {
  const m = A.arr.length
  let res = new Matrix(Array.from({ length: m }, (_, i) => Array.from({ length: m }, (__, j) => i === j ? 1 : 0))) // 单位矩阵

  while (n !== 0) {
    if (n % 2 === 1) res = multiply(A, res)
    n = Math.floor(n / 2)
    A = multiply(A, A)
  }

  return res
}

module.exports = countVowelPermutation