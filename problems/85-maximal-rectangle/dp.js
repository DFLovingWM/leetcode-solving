/**
 * 线段前缀和
 * 
 * 时间：O(N^3)
 */
var maximalRectangle = function(mat) {
  const R = mat.length;
  if (R === 0) {
    return 0;
  }
  const C = mat[0].length;

  const rows = [];
  for (let r = 0; r < R; ++r) {
    const row = [];
    let acc = 0;
    for (let c = 0; c < C; ++c) {
      if (mat[r][c] === '0') {
        acc = 0;
      } else {
        ++acc;
      }
      row.push(acc);
    }
    rows.push(row);
  }

  let maxArea = 0;
  for (let r = 0; r < R; ++r) {
    for (let c = 0; c < C; ++c) {
      let width = Infinity;
      for (let r0 = r; r0 >= 0; --r0) {
        width = Math.min(width, rows[r0][c]);
        if (width === 0) {
          break;
        }
        const area = width * (r - r0 + 1);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};