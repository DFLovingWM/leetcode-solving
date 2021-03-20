/**
 * 拓扑排序 / 多源 BFS / 贪心
 */
var highestPeak = function(mat) {
  const DIRS = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const [R, C] = [mat.length, mat[0].length];
  let queue = [];

  function isValid(r, c) {
    return r >= 0 && r < R && c >= 0 && c < C;
  }

  // 初始结点：水域
  for (let r = 0; r < R; ++r) {
    for (let c = 0; c < C; ++c) {
      if (mat[r][c] === 1) {
        queue.push([r, c]);
      }
    }
  }

  const res = Array.from({ length: R }, () => Array.from({ length: C }, () => -1));
  const visit = Array.from({ length: R }, () => Array.from({ length: C }, () => false));

  // Go
  // BFS 层次遍历
  for (let l = 0; queue.length > 0; ++l) {
    const nextQueue = [];
    for (const [r, c] of queue) {
      // 还没填/遍历
      if (res[r][c] === -1) {
        res[r][c] = l;
      }

      // 扩展子节点
      for (const DIR of DIRS) {
        const nr = r + DIR[0];
        const nc = c + DIR[1];
        if (isValid(nr, nc) && !visit[nr][nc]) {
          visit[nr][nc] = true;
          nextQueue.push([nr, nc]);
        }
      }
    }
    queue = nextQueue;
  }

  return res;
};

[
  [[0,1],[0,0]],
  [[0,0,1],[1,0,0],[0,0,0]],
].forEach(A => {
  console.log(highestPeak(A))
})