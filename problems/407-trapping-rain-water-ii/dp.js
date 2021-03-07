const L2R = 0; // 从左到右
const R2L = 1; // 从右到左
const T2B = 2; // 从上到下
const B2T = 3; // 从下到上

/**
 * DP：左右 => 上下左右
 */
var trapRainWater = function(mat) {
  const [R, C] = [mat.length, mat[0].length];
  // dp[r][c][dir]
  const dp = arr({
    dimensions: [R, C, 4],
    initValue: 0
  });

  // 对于每一行，累积左右方向
  for (let r = 0; r < R; ++r) {
    dp[r][0][L2R] = mat[r][0];
    for (let c = 1; c < C; ++c) {
      dp[r][c][L2R] = Math.max(dp[r][c - 1][L2R], mat[r][c]);
    }

    dp[r][C - 1][R2L] = mat[r][C - 1];
    for (let c = C - 2; c >= 0; --c) {
      dp[r][c][R2L] = Math.max(dp[r][c + 1][R2L], mat[r][c]);
    }
  }

  // 对于每一列，累积上下方向
  for (let c = 0; c < C; ++c) {
    dp[0][c][T2B] = mat[0][c];
    for (let r = 1; r < R; ++r) {
      dp[r][c][T2B] = Math.max(dp[r - 1][c][T2B], mat[r][c]);
    }

    dp[R - 1][c][B2T] = mat[R - 1][c];
    for (let r = R - 2; r >= 0; --r) {
      dp[r][c][B2T] = Math.max(dp[r + 1][c][B2T], mat[r][c]);
    }
  }

  let res = 0;
  for (let r = 1; r < R - 1; ++r) {
    for (let c = 1; c < C - 1; ++c) {
      const height = Math.min(
        dp[r][c - 1][L2R],
        dp[r][c + 1][R2L],
        dp[r - 1][c][T2B],
        dp[r + 1][c][B2T],
      );
      if (height > mat[r][c]) {
        console.log(r,c,height - mat[r][c])
        res += height - mat[r][c];
      }
    }
  }
  return res;
};

function arr({
  dimensions,
  initValue = 0
}) {
  // 一次递归，就是一个维度
  function dfs(i) {
    if (i === dimensions.length) {
      return initValue;
    }
    return Array.from({ length: dimensions[i] }, () => dfs(i + 1));
  }

  return dfs(0);
}

console.log(trapRainWater([[12,13,1,12],[13,4,13,12],[13,8,10,12],[12,13,12,12],[13,13,13,13]]))

/**
 * [
 *  [12,13,1,12],
 *  [13,4,13,12],
 *  [13,8,10,12],
 *  [12,13,12,12],
 *  [13,13,13,13]
 * ]
 * 
 * 9 0
 * 4 2
 * 0 0
 */