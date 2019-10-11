/**
 * 前缀和 + 容斥原理
 * 
 * 时间：96ms
 */

// O(NM)
var NumMatrix = function (matrix) {
  const R = matrix.length
  const C = R === 0 ? 0 : matrix[0].length

  this.prefix = Array.from({ length: R + 1 }, () => {
    return Array.from({ length: C + 1 }, () => {
      return 0
    })
  })

  for (let i = 1; i <= R; ++i) {
    for (let j = 1; j <= C; ++j) {
      // 容斥原理
      this.prefix[i][j] = this.prefix[i-1][j] + this.prefix[i][j-1]
        - this.prefix[i-1][j-1]
        + matrix[i-1][j-1]
    }
  }
};

// O(1)
// 处理好下标细节
NumMatrix.prototype.sumRegion = function (r1, c1, r2, c2) {
  ++r2
  ++c2
  ++r1
  ++c1
  return this.prefix[r2][c2] - this.prefix[r2][c1 - 1] - this.prefix[r1 - 1][c2] +
    this.prefix[r1 - 1][c1 - 1]
};
