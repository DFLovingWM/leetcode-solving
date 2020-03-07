/**
 * 二分查找：从右上角/左下角出发，就能二分
 * 
 * 时间：O(M + N), 56ms
 * 空间：O(1), 37MB
 */
var findNumberIn2DArray = function (matrix, target) {
  const R = matrix.length;
  if (R === 0) return false;
  const C = matrix[0].length;

  let [i, j] = [0, C - 1]; // 右上角出发
  while (i < R && j >= 0) { // 当位置依然合法
    const val = matrix[i][j];
    if (val === target) return true;
    // 不相等时，二分
    if (val > target) { // 太大，则往左走
      --j;
    } else { // 太小，则往下走
      ++i;
    }
  }
  return false; // 到这里表示没找到
};