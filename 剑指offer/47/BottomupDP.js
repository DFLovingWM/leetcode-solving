/**
 * 
 */
var maxValue = function (grid) {
  const R = grid.length, C = grid[0].length;
  const dp = Array.from({ length: R + 1 }, () => Array.from({ length: C + 1 }, () => 0));

  for (let i = 1; i <= R; ++i) {
    for (let j = 1; j <= C; ++j) {
      dp[i][j] = grid[i - 1][j - 1] + Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[R][C];
};