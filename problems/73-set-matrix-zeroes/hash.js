/**
 * hash：记录要清零的行、列
 * 时间：O(MN)
 * 空间：O(M+N)
 */
var setZeroes = function(mat) {
  const [R, C] = [mat.length, mat[0].length];

  // 处理某一行是否存在0
  const row = [];
  for (let r = 0; r < R; ++r) {
    let hasZero = false;
    for (let c = 0; c < C; ++c) {
      if (mat[r][c] === 0) {
        hasZero = true;
        break;
      }
    }
    row.push(hasZero);
  }

  // 处理某一列是否存在0
  const col = [];
  for (let c = 0; c < C; ++c) {
    let hasZero = false;
    for (let r = 0; r < R; ++r) {
      if (mat[r][c] === 0) {
        hasZero = true;
        break;
      }
    }
    col.push(hasZero);
  }

  // 最后再修改
  for (let r = 0; r < R; ++r) {
    if (row[r]) {
      for (let c = 0; c < C; ++c) {
        mat[r][c] = 0;
      }
    }
  }
  for (let c = 0; c < C; ++c) {
    if (col[c]) {
      for (let r = 0; r < R; ++r) {
        mat[r][c] = 0;
      }
    }
  }
};
