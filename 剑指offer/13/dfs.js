/**
 * DFS
 * 
 * 时间：120ms
 */
var movingCount = function (m, n, k) {
  let res = 0;
  const visit = Array.from({ length: m }, () => Array.from({ length: n }, () => false));
  const DIRS = [[0, -1], [-1, 0], [0, 1], [1, 0]];

  function isValid(i, j) {
    return i >= 0 && i < m && j >= 0 && j < n;
  }

  // 将要遍历(i, j)
  function dfs(i, j) {
    if (!isValid(i, j) || visit[i][j] || !check(i, j, k)) return;

    // 本结点
    ++res;
    visit[i][j] = true;

    // 扩展子结点
    for (const dir of DIRS) {
      const ni = i + dir[0];
      const nj = j + dir[1];
      dfs(ni, nj);
    }
  }

  dfs(0, 0);
  return res;
};

function check(i, j, k) {
  let sum = 0;
  for (; i; i = Math.floor(i / 10)) {
    sum += i % 10;
  }
  for (; j; j = Math.floor(j / 10)) {
    sum += j % 10;
  }
  return sum <= k;
}