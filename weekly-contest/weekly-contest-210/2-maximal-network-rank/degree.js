/**
 * 直接算degree
 */
var maximalNetworkRank = function(n, roads) {
  const degree = Array.from({ length: n }, () => 0);
  const join = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

  for (const [u, v] of roads) {
    ++degree[u];
    ++degree[v];
    join[u][v] = join[v][u] = true;
  }

  // 暴力遍历
  let res = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === j) continue;
      const tmp = degree[i] + degree[j] + (join[i][j] ? -1 : 0);
      res = Math.max(res, tmp);
    }
  }
  return res;
};
