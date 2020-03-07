/**
 * 贪心/找规律：
 * 
 * 时间：O(N), 56ms
 * 空间：O(1), 33.8MB
 */
var cuttingRope = function (n) {
  // 边界
  if (n === 2) return 1;
  if (n === 3) return 2;
 
  const MOD = 1e9 + 7;
  let res = 1;
  // 贪心：优先分割出3（需要保证减3后，不能剩余1）
  for (; n - 3 >= 2; n -= 3) {
    res = res * 3 % MOD;
  }
  // 剩余的，直接乘上就行
  if (n) res = res * n % MOD;
  return res;
};