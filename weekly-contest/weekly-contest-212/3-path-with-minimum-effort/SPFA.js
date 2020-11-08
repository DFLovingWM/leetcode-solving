/**
 * SPFA
 * 
 * 时间：O(VE) ~= O(N^4), 352ms
 */
var minimumEffortPath = function(mat) {
  const [m, n] = [mat.length, mat[0].length];
  
  function isValid(r, c) {
    return r >= 0 && r < m && c >= 0 && c < n;
  }

  const DIRS = [[1,0], [0,1], [-1,0], [0,-1]];
  // 不断迭代更新
  const f = Array.from({ length: m }, () => Array.from({ length: n }, () => Infinity));
  const queue = [];

  f[0][0] = 0;
  queue.push([0, 0]);

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    // 核心：以(r, c)为基准，收敛4个方向上的(nr, nc)
    for (const [ro, co] of DIRS) {
      const nr = r + ro;
      const nc = c + co;
      if (!isValid(nr, nc)) continue;
      const newVal = Math.max(
        f[r][c],
        Math.abs(mat[nr][nc] - mat[r][c])
      );
      // 如果不能更好，则丢弃
      if (newVal >= f[nr][nc]) continue;
      // 否则更新答案，并加入队列
      f[nr][nc] = newVal;
      queue.push([nr, nc]);
    }
  }

  return f[m-1][n-1];
};

module.exports = minimumEffortPath;
