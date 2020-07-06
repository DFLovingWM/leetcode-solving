/**
 * Floyd
 */
var checkIfPrerequisite = function(n, prerequisites, queries) {
  const reach = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  // 初始化
  for (let i = 0; i < n; ++i) {
    reach[i][i] = true;
  }
  // 条件
  for (const [from, to] of prerequisites) {
    reach[from][to] = true;
  }
  // 开始
  for (let k = 0; k < n; ++k) {
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        if (!reach[i][j] && reach[i][k] && reach[k][j]) {
          reach[i][j] = true;
        }
      }
    }
  }

  const res = [];
  for (const [a, b] of queries) {
    res.push(reach[a][b]);
  }
  return res;
};