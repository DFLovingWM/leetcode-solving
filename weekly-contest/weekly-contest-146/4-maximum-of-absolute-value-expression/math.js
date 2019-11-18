/**
 * 数学：枚举绝对值的4种情况
 * 
 * 时间：`O(N)`, 72ms
 */
var maxAbsValExpr = function (A, B) {
  const n = A.length
  const RElATIONS = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1]
  ]

  let res = 0

  // 枚举绝对值能变成的4种运算关系
  for (const [xo, yo] of RElATIONS) {
    let max = -Infinity
    let min = Infinity

    // 找最大值、最小值（差最大）
    for (let i = 0; i < n; ++i) {
      const tmp = xo * A[i] + yo * B[i] + i
      max = Math.max(max, tmp)
      min = Math.min(min, tmp)
    }

    res = Math.max(res, max - min)
  } 

  return res
};

[
  [[1,2,3,4], [-1,4,5,6]],
  [[1,-2,-5,0,10], [0,-2,-1,-7,-4]],
].forEach(input => {
  console.log(maxAbsValExpr(...input))
})