/**
 * DP（爆）
 */
var minDays = function(N) {
  const memo = new Map();

  function f(n) {
    if (n === 0) return 0;
    if (memo.has(n)) return memo.get(n);

    let res = Infinity;
    if (n % 2 === 0) {
      res = Math.min(res, 1 + f(n / 2));
    }
    if (n % 3 === 0) {
      res = Math.min(res, 1 + f(n - 2 * (n / 3)));
    }
    res = Math.min(res, 1 + f(n - 1));
    memo.set(n, res);
    return res;
  }

  return f(N);
};

console.log(minDays(2 * 1e9))