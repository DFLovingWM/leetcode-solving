/**
 * DP
 */
var minDays = function(N) {
  const memo = new Map();

  function f(n) {
    if (n === 0) return 0;
    if (n === 1) return 1; // 多了个边界

    if (memo.has(n)) return memo.get(n);

    const res = Math.min(
      n % 2 + 1 + f(Math.floor(n / 2)), // 直接跳过能被2整除的
      n % 3 + 1 + f(Math.floor(n / 3))  // 直接跳过能被3整除的
    );
    memo.set(n, res);
    return res;
  }

  return f(N);
};