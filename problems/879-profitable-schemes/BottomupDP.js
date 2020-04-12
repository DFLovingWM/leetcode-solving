/**
 * Bottom-up DP
 * 
 * 时间：O(N^3), 1128ms
 * 空间：O(N^3)
 */
var profitableSchemes = function (G, P, groups, profits) {
  const N = groups.length;
  const MOD = 1e9 + 7;

  // dp[i][g][p]表示前`i`个犯罪中，使用人数达到`g`、利益达到`p`的方案数
  const dp = A(N + 1, () => A(G + 1, () => A(P + 1, () => 0)));
  // 边界：利益为0表示起点，方案数为1
  for (let i = 0; i <= N; ++i) {
    for (let g = 0; g <= G; ++g) {
      dp[i][g][0] = 1;
    }
  }
  // 迭代
  for (let i = 1; i <= N; ++i) {
    const group = groups[i - 1];
    const profit = profits[i - 1];

    for (let g = 0; g <= G; ++g) {
      for (let p = 0; p <= P; ++p) {
        dp[i][g][p] = dp[i - 1][g][p]; // 策略1：不做
        if (g >= group) { // 策略2：（如果人数够）做
          dp[i][g][p] += dp[i - 1][g - group][Math.max(p - profit, 0)]; // (p-profit)<0，对应超过P（就当作P）的情况
        }
        dp[i][g][p] %= MOD;
      }
    }
  }
  // 目标
  return dp[N][G][P];
};

function A(length, getter) {
  return Array.from({ length }, getter);
}

module.exports = profitableSchemes;