/**
 * Bottom-up DP（空间压缩）
 * 
 * 时间：O(N), 72ms
 * 空间：O(1), 35.7MB
 */
var fib = function (n) {
  const MOD = 1e9 + 7;
  let [prev, curr] = [1, 0]; // curr表示当前项
  for (let i = 1; i <= n; ++i) {
    [prev, curr] = [curr, (prev + curr) % MOD];
  }
  return curr;
};