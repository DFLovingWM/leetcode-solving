/**
 * 枚举所有操作：每个格子最多翻转1次，而且两个格子的翻转与顺序无关，所以共有`2^(NM)`种操作
 * 
 * 时间：`O(2^K * K)`，其中K=NM。72ms
 */
var minFlips = function (mat) {
  const [R, C] = [mat.length, mat[0].length]
  const n = 1 << R * C
  let res = Infinity

  for (let i = 0; i < n; ++i) { // 枚举
    if (judge(mat, i)) { // 如果合法
      res = Math.min(res, count(i)) // 则记录最小步数
    }
  }

  return res === Infinity ? -1 : res
};

const DIRS = [
  [0, 0],
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1]
]

// 判断`matrix`是否能通过`action`变成全0矩阵
function judge (matrix, action) {
  const [R, C] = [matrix.length, matrix[0].length]

  // 判断每个位置最终是否都为0
  for (let x = 0; x < R; ++x) {
    for (let y = 0; y < C; ++y) {
      let change = 0 // 对(x, y)翻转的次数

      for (const dir of DIRS) {
        const [nx, ny] = [x + dir[0], y + dir[1]]
        if (nx >= 0 && nx < R && ny >= 0 && ny < C
          && ((1 << nx * C + ny) & action)) { // action的该位上为1
          ++change
        }
      }

      // 奇+偶 => (x, y)最终为1 => 不合法
      if ((matrix[x][y] + change) & 1) {
        return false
      }
    }
  }

  return true
}

// 获取该操作的代价（其实就是数1的个数）
function count (action) {
  let res = 0
  for (; action; action >>>= 1) {
    if (action & 1) {
      ++res
    }
  }
  return res
}

module.exports = minFlips;