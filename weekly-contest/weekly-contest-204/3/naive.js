/**
 * 直接来 => Tarjan
 * 脑筋急转弯 => DFS/BFS
 * 
 * 时间：O(N^4), 332ms
 */
var minDays = function(grid) {
  // 0：已经是分离的了
  if (isSeparate(grid)) return 0;

  // 1：尝试（遍历）删除某一个，检查整体是否联通
  const [m, n] = [grid.length, grid[0].length];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0; // 更改
        if (isSeparate(grid)) return 1;
        grid[i][j] = 1; // 恢复
      }
    }
  }

  // 2：其它情况
  return 2;
};

// 是否分离（多个岛屿）
function isSeparate(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const visit = Array.from({ length: m }, (
    () => Array.from({ length: n }, () => (
      false
    ))
  ));

  function getFirstLandCell() {
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
        if (grid[i][j] === 1) return [i, j];
      }
    }
  }

  function isValid(r, c) {
    return r >= 0 && r < m && c >= 0 && c < n;
  }

  function dfs(r, c) {
    visit[r][c] = true;
    for (const DIR of DIRS) {
      const nr = r + DIR[0];
      const nc = c + DIR[1];
      if (!isValid(nr, nc)) continue;
      if (grid[nr][nc] !== 1 || visit[nr][nc]) continue;
      dfs(nr, nc);
    }
  }

  const first = getFirstLandCell();
  // Edge case：原本只有1个陆地格子，那么答案为1
  if (!first) {
    return true;
  }
  
  const [sr, sc] = first;
  // 从某个陆地格子开始着色
  dfs(sr, sc);
  // 完毕后，如果还存在未上色的陆地格子，那么就是分离的
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 1 && !visit[i][j]) {
        return true;
      }
    }
  }
  return false;
}

module.exports = minDays;
