/**
 * DP：维护每个位置的max与min
 */
var maxProductPath = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const dp = A(m, () => (
    A(n, () => [1, 1])
  ));
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      const num = grid[i][j];
      if (i === 0 && j === 0) {
        dp[i][j] = [num, num];
        continue;
      }
      const candicates = [];
      if (j !== 0) {
        candicates.push(dp[i][j-1][0] * num);
        candicates.push(dp[i][j-1][1] * num);
      }
      if (i !== 0) {
        candicates.push(dp[i-1][j][0] * num);
        candicates.push(dp[i-1][j][1] * num);
      }
      dp[i][j] = [
        Math.max(...candicates),
        Math.min(...candicates)
      ];
    }
  }
// console.log(dp)
  const res = Math.max(...dp[m-1][n-1]);
  if (res < 0) return -1;
  if (res === 0) return 0;
  return res % (1e9 + 7);
};

function A(length, getter) {
  return Array.from({ length }, getter);
}

[
  [[-1,-2,-3],
  [-2,-3,-3],
  [-3,-3,-2]],

  [[1,-2,1],
  [1,-2,1],
  [3,-4,1]],

  [[1, 3],
  [0,-4]],

  [[ 1, 4,4,0],
  [-2, 0,0,1],
  [ 1,-1,1,1]],
].forEach(m => {
  console.log(maxProductPath(m))
})