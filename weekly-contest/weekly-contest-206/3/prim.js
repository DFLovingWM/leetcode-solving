/**
 * Prim
 * 
 * 时间：O(N^2)
 */
var minCostConnectPoints = function(points) {
  const n = points.length;

  // 开始Prim
  const visit = Array.from({ length: n }, () => false);
  const dist = Array.from({ length: n }, () => Infinity);
  // x表示本轮选取的点，一开始可以选0
  let x = 0;
  dist[x] = 0;
  do {
    visit[x] = true;

    // 先收敛
    for (let i = 0; i < n; ++i) {
      if (!visit[i]) {
        dist[i] = Math.min(dist[i], getDist(points[i], points[x]));
      }
    }

    // 再找下一个点
    x = -1;
    for (let i = 0; i < n; ++i) {
      if (!visit[i] && (x === -1 || dist[i] < dist[x])) {
        x = i;
      }
    }
    if (x === -1) break;
  } while (true);

  return dist.reduce((acc, e) => acc + e, 0);
};

// 曼哈顿距离
function getDist(A, B) {
  return Math.abs(A[0] - B[0]) + Math.abs(A[1] - B[1]);
}

module.exports = minCostConnectPoints;
