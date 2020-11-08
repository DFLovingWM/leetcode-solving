/**
 * 组合
 * 
 * 时间：O(N^4)
 */
var paintingPlan = function(n, k) {
  // 特殊
  if (k === 0) return 1;
  // 不可能
  if (k < n) return 0;
  // 全部
  if (k === n * n) return 1;
  
  // 检查这种涂鸦方式是否满足k
  function check(r, c) {
    const mat = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

    // 涂r行
    for (let i = 0; i < r; ++i) {
      for (let j = 0; j < n; ++j) {
        mat[i][j] = 1;
      }
    }
    // 涂c列
    for (let j = 0; j < c; ++j) {
      for (let i = 0; i < n; ++i) {
        mat[i][j] = 1;
      }
    }

    const sum = mat.reduce((sum, row) => (
      sum + row.reduce((acc, e) => acc + e, 0)
    ), 0);
    return sum === k;
  }

  let res = 0;
  // r行c列
  for (let r = 0; r <= n; ++r) {
    for (let c = 0; c <= n; ++c) {
      if (!check(r, c)) continue;
      // console.log(r, c)
      res += C(n, r) * C(n, c);
    }
  }
  return res;
};

function C(n, k) {
  let [top, bottom] = [1, 1];
  for (let i = 1; i <= k; ++i) {
    top *= n;
    --n;
    bottom *= i;
  }
  return top / bottom;
}

module.exports = paintingPlan;