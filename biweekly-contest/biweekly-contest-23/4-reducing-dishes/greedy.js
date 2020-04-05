/**
 * 贪心：从全部菜开始，减菜（后缀数组优化）
 * 
 * 时间：O(NlogN), 104ms
 */
var maxSatisfaction = function (sat) {
  // 升序
  sat.sort((a, b) => a - b);

  // 求后缀和
  const n = sat.length;
  const suffix = Array.from({ length: n }, () => 0); // 后缀和
  suffix[n - 1] = sat[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    suffix[i] = suffix[i + 1] + sat[i];
  }
  
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    sum += sat[i] * (i + 1);
  }
  let res = sum;
  // 开始舍弃一些负数菜
  for (let i = 0; i < n; ++i) {
    const tmp = res - sat[i] - (i + 1 < n ? suffix[i + 1] : 0);
    res = Math.max(res, tmp);
  }
  return res;
};

module.exports = maxSatisfaction;