/**
 * Top-down DP
 * 
 * 时间：O(N^2), 1772ms
 * 空间：O(N^2)
 */
var soupServings = function (N) {
  if (N >= 5000) return 1;

  const memo = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => -1));

  // 当前分别剩余A、B毫升
  function helper(A, B) {
    if (A <= 0 && B > 0) return 1; // A先分配完
    if (A <= 0 && B <= 0) return 0.5; // A、B同时分配完
    if (A > 0 && B <= 0) return 0; // B先分配完

    if (memo[A][B] !== -1) return memo[A][B];

    // 4种策略
    const res = 0.25 * helper(A - 100, B) +
      0.25 * helper(A - 75, B - 25) +
      0.25 * helper(A - 50, B - 50) +
      0.25 * helper(A - 25, B - 75);
    return memo[A][B] = res;
  }

  return helper(N, N);
};