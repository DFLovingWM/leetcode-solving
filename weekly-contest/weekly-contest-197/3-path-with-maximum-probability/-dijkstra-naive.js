/**
 * Dijkstra朴素版
 * O(N^2), 超时
 */
var maxProbability = function(n, edges, succProb, start, end) {
  const BASE = 0.2; // 范围在(0, 1)即可

  const weight = [];
  for (const p of succProb) {
    weight.push(log(BASE, p));
  }

  const matrix = Array.from({ length: n }, () => ( // 二维矩阵
    Array.from({ length: n }, () => Infinity)
  ));
  for (let i = 0; i < edges.length; ++i) {
    const [a, b] = edges[i];
    matrix[a][b] = matrix[b][a] = weight[i];
  }

  const dist = Array.from({ length: n }, () => Infinity);
  const visit = Array.from({ length: n }, () => false);
  dist[start] = 0;
  while (true) {
    let minIndex = -1;
    for (let i = 0; i < n; ++i) {
      if (!visit[i] && (minIndex === -1 || dist[i] < dist[minIndex])) {
        minIndex = i;
      }
    }
    if (minIndex === -1 || dist[minIndex] === Infinity) break;
    // 标记
    visit[minIndex] = true;
    // 收敛
    const i = minIndex;
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] !== Infinity) {
        dist[j] = Math.min(dist[j], dist[i] + matrix[i][j]);
      }
    }
  }
  
  if (dist[end] === Infinity) return 0;
  return Math.pow(BASE, dist[end]);
};

function log(x, y) {
  return Math.log(y) / Math.log(x);
}

module.exports = maxProbability;