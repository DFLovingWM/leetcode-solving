/**
 * Top-down DP
 * 
 * 时间：O(NGP) ~= O(N^3), 1816ms
 */
var profitableSchemes = function(G, P, groups, profits) {
  const n = groups.length;
  const memo = A(n + 1, () => A(G + 1, () => A(P + 1, () => -1)));
  const MOD = 1e9 + 7;

  // 当前在第`i`个犯罪、剩余人数为`g`、利益达到`p`的方案数
  function helper(i, g, p) {
    if (i >= n) {
      if (p === P) return 1; // 利益到达P，该方案就能累计（为1）
      return 0; // 否则不能累计
    }

    if (memo[i][g][p] !== -1) return memo[i][g][p];

    // 策略1：不做
    let res = helper(i + 1, g, p);
    // 策略2：做（前提是剩余人数足够）
    if (g >= groups[i]) {
      res += helper(i + 1, g - groups[i], Math.min(p + profits[i], P)) // 这里如果超出P、就记为P
    }
    return memo[i][g][p] = res % MOD;
  }

  return helper(0, G, 0);
};

function A(length, getter) {
  return Array.from({ length }, getter);
}

module.exports = profitableSchemes;