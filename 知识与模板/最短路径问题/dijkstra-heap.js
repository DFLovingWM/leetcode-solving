const PriorityQueue = require('../堆/PriorityQueue')

/**
 * 状态定义
 * 取决于具体的业务/问题
 */
function State(vertex, weight) {
  this.vertex = vertex;
  this.weight = weight;
}

/**
 * 二叉堆优化的Dijkstra
 * @param {number} n 结点总数
 * @param {Array<[number, number]>} adj 邻接表
 * @param {number} start 起始结点
 * @returns {Array<number>} start到各点的最短距离数组
 */
function dijkstra(n, adj, start) {
  const dist = Array.from({ length: n }, () => Infinity);
  const queue = new PriorityQueue((A, B) => A.weight < B.weight); // Priority<State>

  dist[start] = 0;
  queue.add(new State(start, 0));

  while (!queue.empty()) {
    const { vertex: u, weight } = queue.poll();

    // 巧妙的去重判断
    // 不需要额外的 visited 数组（空间优化）
    if (dist[u] < weight) {
      continue;
    }

    // 松弛
    for (const [v, w] of adj[u]) {
      const d = dist[u] + w;
      if (d < dist[v]) {
        dist[v] = d;
        queue.add(new State(v, d));
      }
    }
  }

  return dist;
}

module.exports = dijkstra;
