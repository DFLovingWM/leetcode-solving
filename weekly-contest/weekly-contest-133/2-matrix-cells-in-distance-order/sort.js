/**
 * 耍赖：直接排序
 * 
 * 时间：`O(NlogN)`, 264ms
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  const cos = []
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      cos.push([i, j])
    }
  }
  cos.sort((A, B) => manhattan(A, [r0, c0]) - manhattan(B, [r0, c0]))
  return cos
};

function manhattan (A, B) {
  return Math.abs(A[0] - B[0]) + Math.abs(A[1] - B[1])
}

module.exports = allCellsDistOrder