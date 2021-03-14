/**
 * 求度
 */
var findCenter = function(edges) {
  // 求 N
  let max = -Infinity;
  for (const [a, b] of edges) {
    max = Math.max(max, a, b);
  }

  // 求度
  const n = max;
  const deg = Array.from({ length: n + 1 }, () => 0);
  for (const [a, b] of edges) {
    ++deg[a];
    ++deg[b];
  }
  for (let i = 1; i <= n; ++i) {
    if (deg[i] === n - 1) { // 度为 N-1 的结点就是答案
      return i;
    }
  }
  return -1;
};