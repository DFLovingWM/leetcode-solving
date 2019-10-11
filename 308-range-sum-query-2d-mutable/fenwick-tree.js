/**
 * Fenwick树，映射到一维
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix
  this.tree = new FenwickTree(matrix)
};

NumMatrix.prototype.update = function (row, col, val) {
  this.tree.update(row + 1, col + 1, val - this.matrix[row][col])
  this.matrix[row][col] = val
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return this.tree.rangeSum(row1 + 1, col1 + 1, row2 + 1, col2 + 1)
};

module.exports = NumMatrix

// 二维Fenwick树
class FenwickTree {
  constructor (matrix) {
    const R = matrix.length
    let C
    if (R === 0) {
      C = 0
    } else {
      C = matrix[0].length
    }
    

    this.arr = Array.from({ length: R + 1 }, (_, i) => {
      return Array.from({ length: C + 1 }, (__, j) => {
        return 0
      })
    })

    for (let i = 0; i < R; ++i) {
      for (let j = 0; j < C; ++j) {
        this.update(i + 1, j + 1, matrix[i][j])
      }
    }
  }

  lowBit (x) {
    return x & -x
  }

  prefixSum (ex, ey) {
    let res = 0
    for (let x = ex; x; x -= this.lowBit(x)) {
      for (let y = ey; y; y -= this.lowBit(y)) {
        res += this.arr[x][y]
      }
    }
    return res
  }

  rangeSum (x1, y1, x2, y2) {
    // 容斥原理
    return this.prefixSum(x2, y2) - this.prefixSum(x1 - 1, y2) - this.prefixSum(x2, y1 - 1) + this.prefixSum(x1 - 1, y1 - 1)
  }

  update (i, j, delta) {
    for (let x = i; x < this.arr.length; x += this.lowBit(x)) {
      for (let y = j; y < this.arr[0].length; y += this.lowBit(y)) {
        this.arr[x][y] += delta
      }
    }
  }
}