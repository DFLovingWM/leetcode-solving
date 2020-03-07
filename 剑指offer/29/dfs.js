/**
 * DFS
 * 
 * 时间：O(NM), 112ms
 * 空间：O(NM), 43MB
 */
var spiralOrder = function (matrix) {
  const R = matrix.length;
  if (R === 0) return [];

  const C = matrix[0].length;
  const res = [];
  const visit = Array.from({ length: R }, () => Array.from({ length: C }, () => false));

  function isValid(r, c) {
    return r >= 0 && r < R && c >= 0 && c < C;
  }

  // 递归函数：即将访问(r, c)，当前方向为dir
  function dfs(r, c, dir) {
    if (res.length === R * C) return; // 数量够了，就终止

    // 本位置
    res.push(matrix[r][c]);
    visit[r][c] = true;

    // 下一个位置
    let [nr, nc] = getNextPos(r, c, dir);
    if (isValid(nr, nc) && !visit[nr][nc]) { // 能走，则走
      dfs(nr, nc, dir);
    } else { // 不能走，则转向
      dir = (dir + 1) % 4;
      [nr, nc] = getNextPos(r, c, dir);
      dfs(nr, nc, dir);
    }
  }

  dfs(0, 0, 1);
  return res;
};

// 当前位置在(r, c)，往dir方向获取下一个位置
function getNextPos(r, c, dir) {
  let [nr, nc] = [r, c];
  switch (dir) {
    case 0: // 上
      --nr;
      break;
    case 1: // 右
      ++nc;
      break;
    case 2: // 下
      ++nr;
      break;
    case 3: // 左
      --nc;
      break;
  }
  return [nr, nc];
}