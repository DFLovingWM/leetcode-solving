/**
 * hash：行、列的操作可以合并起来，代码更简洁
 * 时间：O(MN)
 * 空间：O(M+N)
 */
var setZeroes = function(mat) {
  const [R, C] = [mat.length, mat[0].length];

  // 遍历每个cell
  const rowSet = new Set();
  const colSet = new Set();
  for (let r = 0; r < R; ++r) {
    for (let c = 0; c < C; ++c) {
      if (mat[r][c] === 0) {
        rowSet.add(r);
        colSet.add(c);
      }
    }
  }

  // 检查每个cell
  for (let r = 0; r < R; ++r) {
    for (let c = 0; c < C; ++c) {
      if (rowSet.has(r) || colSet.has(c)) {
        mat[r][c] = 0;
      }
    }
  }
};
