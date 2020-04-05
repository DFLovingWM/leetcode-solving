/**
 * 贪心（后缀数组优化）
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
    if (sat[i] < 0) {
      const tmp = res - sat[i] - (i + 1 < n ? suffix[i + 1] : 0);
      if (tmp > res) {
        res = tmp;
      }
    }
  }
  return res;
};

// [
//   [-1,-8,0,5,-9],
//   [4,3,2],
//   [-1,-4,-5],
//   [-2,5,-1,0,3,-3],
// ].forEach(A=> {
//   console.log(maxsat(A));
// })