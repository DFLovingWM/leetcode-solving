/**
 * `dp[i][j][k]`表示`(i,j)`不同方向上的1的个数
 * 
 * 时间：O(N^2), 1500ms
 * 空间：O(N^2)
 */
var orderOfLargestPlusSign = function (N, mines) {
  // 将mine的数组结构转换为HashSet，比二维矩阵更省空间
  const getKey = (x, y) => x * N + y
  const mineSet = new Set()
  for (const mine of mines) {
    mineSet.add(getKey(mine[0], mine[1]))
  }

  // 从上到下，从左到右
  const left = create2DimenArr(N + 1, N + 1, 0)
  const top = create2DimenArr(N + 1, N + 1, 0)
  for (let i = 1; i <= N; ++i) {
    for (let j = 1; j <= N; ++j) {
      if (mineSet.has(getKey(i - 1, j - 1))) continue
      left[i][j] = 1 + left[i][j - 1]
      top[i][j] = 1 + top[i - 1][j]
    }
  }

  // 从下到上，从右到左
  const right = create2DimenArr(N + 2, N + 2, 0)
  const bottom = create2DimenArr(N + 2, N + 2, 0)
  for (let i = N; i >= 1; --i) {
    for (let j = N; j >= 1; --j) {
      if (mineSet.has(getKey(i - 1, j - 1))) continue
      right[i][j] = 1 + right[i][j + 1]
      bottom[i][j] = 1 + bottom[i + 1][j]
    }
  }

  let res = 0
  for (let i = 1; i <= N; ++i) {
    for (let j = 1; j <= N; ++j) {
      const tmp = Math.min(left[i][j], top[i][j], right[i][j], bottom[i][j])
      res = Math.max(res, tmp)
    }
  }
  return res
};

function create2DimenArr(row, col, defVal) {
  return Array.from({ length: row }, () => {
    return Array.from({ length: col }, () => {
      return defVal
    })
  })
}

[
  [5, [[4, 2]]],
  [2, []],
  [1, [[0, 0]]],
].forEach(input => {
  console.log(orderOfLargestPlusSign(...input))
})