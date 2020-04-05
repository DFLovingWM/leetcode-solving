/**
 * BFS（着色方案）
 * 
 * 时间：328ms
 */
function hasValidPath(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const visit = Array.from({ length: m }, () => Array.from({ length: n }, () => false));
  const DIRS = [[-1, 0], [0, -1], [1, 0], [0, 1]];

  // 判断位置是否合法
  function isValid(r, c) {
    return r >= 0 && r < m && c >= 0 && c < n;
  }

  // 判断两个相邻位置是否连通
  function isConnected(r1, c1, r2, c2, dir) {
    const p = [grid[r1][c1], grid[r2][c2]];
    let pairs;
    if (dir === 0) { // 上
      pairs = [[2,5,6], [2,3,4]];
    } else if (dir === 1) { // 左
      pairs = [[1,3,5], [1,4,6]];
    } else if (dir === 2) { // 下
      pairs = [[2,3,4], [2,5,6]];
    } else { // 右
      pairs = [[1,4,6], [1,3,5]];
    }
    return pairs.every((_, i) => pairs[i].includes(p[i]));
  }

  const queue = [[0, 0]];
  visit[0][0] = true;

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    if (r === m - 1 && c === n - 1) {
      return true;
    }

    for (let i = 0; i < 4; ++i) {
      const [ro, co] = DIRS[i];
      const nr = r + ro;
      const nc = c + co;
      if (isValid(nr, nc) && !visit[nr][nc] && isConnected(r, c, nr, nc, i)) {
        visit[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }
  }
  return false;
}

module.exports = hasValidPath;