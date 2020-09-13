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
  dist[0] = 0;
  visit[0] = true;
  for (let i = 1; i < n; ++i) {
    dist[i] = getDist(points[0], points[i]);
  }
  // 循环(n-1)次，因为还要找(n-1)个点
  let loop = n - 1;
  let res = 0;
  while (loop--) {
    // 找下一个点
    let x = -1;
    for (let i = 0; i < n; ++i) {
      if (!visit[i] && (x === -1 || dist[i] < dist[x])) {
        x = i;
      }
    }
    
    // 处理该点
    visit[x] = true;
    res += dist[x];

    // 收敛其余点
    for (let i = 0; i < n; ++i) {
      if (!visit[i]) {
        dist[i] = Math.min(dist[i], getDist(points[i], points[x]));
      }
    }
  }

  return res;
};

// 曼哈顿距离
function getDist(A, B) {
  return Math.abs(A[0] - B[0]) + Math.abs(A[1] - B[1]);
}

module.exports = minCostConnectPoints;
