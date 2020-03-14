/**
 * DFS，求最大路径和
 */
var numOfMinutes = function(n, headID, manager, informTime) {
  // 建立正向映射
  const p2c = Array.from({ length: n }, () => []); // 父节点 => 子节点数组
  for (let i = 0; i < n; ++i) {
    const p = manager[i];
    if (p === -1) continue;
    p2c[p].push(i);
  }
  
  let res = 0;

  function dfs(i, sum) {
    if (p2c[i].length === 0) { // 叶子
      res = Math.max(res, sum);
      return;
    }

    for (const j of p2c[i]) {
      dfs(j, sum + informTime[i]);
    }
  }

  dfs(headID, 0);
  return res;
};