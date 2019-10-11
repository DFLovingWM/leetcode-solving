/**
 * 类似于84题的naive解法。
 * 设`width[i][j]`为以`(i-1,j-1)`为结尾的矩形的最大宽度。
 * 
 * 时间：O(R^2 * C), 152ms
 */
var maximalRectangle = function (matrix) {
  const R = matrix.length
  if (R === 0) return 0
  const C = matrix[0].length

  const width = Array.from({ length: R + 1 }, () => {
    return Array.from({ length: C + 1 }, () => {
      return 0
    })
  })

  let maxArea = 0

  for (let i = 1; i <= R; ++i) {
    for (let j = 1; j <= C; ++j) {
      if (matrix[i - 1][j - 1] === '0') continue
      width[i][j] = width[i][j - 1] + 1

      // 往上遍历所有宽度，同时求最大面积
      let w = width[i][j] // w表示当前宽度，只会越来越小
      for (let k = i; k >= 1; --k) {
        w = Math.min(w, width[k][j])
        const currArea = w * (i - k + 1)
        maxArea = Math.max(maxArea, currArea)
      }
    }
  }

  return maxArea
};

console.log(maximalRectangle([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]))