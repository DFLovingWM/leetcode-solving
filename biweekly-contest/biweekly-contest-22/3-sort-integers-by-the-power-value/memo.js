/**
 * 记忆化
 * 
 * 时间：128ms
 */
var getKth = function(lo, hi, k) {
  const memo = new Map();

  // 递归函数
  function helper(n) {
    if (n === 1) return 0;
    if (memo.has(n)) return memo.get(n);

    let res = 1;
    if (n & 1) {
      res += helper(3 * n + 1);
    } else {
      res += helper(n / 2);
    }
    memo.set(n, res);
    return res;
  }

  const weights = [];
  for (let i = lo; i <= hi; ++i) {
    weights.push([i, helper(i)]);
  }
  weights.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });
  return weights[k - 1][0];
};