/**
 * 组合
 * 
 * 时间：O(N^3)
 */
var paintingPlan = function(n, k) {
  // Edge case 1
  if (n * n === k) return 1;

  let res = 0;
  for (let i = 0; i <= n; ++i) {
    for (let j = 0; j <= n; ++j) {
      // count表示(i,j)方案下的黑色数：
      // 横 + 竖 - 重叠
      const count = n * i + n * j - i * j;
      // 如果满足条件
      if (count === k) {
        res += C(n, i) * C(n, j);
      }
    }
  }
  return res;
};

// 求组合数
function C(n, k) {
  // 分子
  let top = 1;
  for (let i = n; i >= n - k + 1; --i) {
    top *= i;
  }
  // 分母
  let bottom = 1;
  for (let j = k; j >= 1; --j) {
    bottom *= j;
  }
  return top / bottom;
}

module.exports = paintingPlan;
