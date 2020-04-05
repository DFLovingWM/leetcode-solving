/**
 * Top-down（比Bottom-up更好理解）
 */
var stoneGame = function(piles) {
  const n = piles.length;
  const memo = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));

  function helper(left, right) {
    if (left > right) {
      return 0;
    }
    if (memo[left][right]) {
      return memo[left][right];
    }

    let res = -Infinity;
    // 拿左边
    const takeLeft = piles[left] - helper(left + 1, right); // 我的收益 - 对方收益 => 我的纯收益
    res = Math.max(res, takeLeft);
    // 拿右边
    const takeRight = piles[right] - helper(left, right - 1);
    res = Math.max(res, takeRight);
    memo[left][right] = res;
    return res;
  }

  helper(0, n - 1);
  return memo[0][n - 1] > 0;
};