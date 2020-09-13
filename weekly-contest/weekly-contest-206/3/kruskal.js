/**
 * Kruskal
 */
var minCostConnectPoints = function(points) {
  // 暴力搜索所有边
  const edges = [];
  const n = points.length;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === j) continue;
      const d = getDist(points[i], points[j]);
      edges.push([i, j, d]);
    }
  }

  // 开始Kruskal
  edges.sort((A, B) => A[2] - B[2]);
  const uf = new UnionFind(n);
  let res = 0;
  for (const [u, v, d] of edges) {
    if (uf.union(u, v)) {
      res += d;
    }
  }
  return res;
};

// 曼哈顿距离
function getDist(A, B) {
  return Math.abs(A[0] - B[0]) + Math.abs(A[1] - B[1]);
}

// 并查集
class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, (_, index) => index)
  }

  getRoot (x) {
    if (this.father[x] === x) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  union (x, y) {
    const [xx, yy] = [this.getRoot(x), this.getRoot(y)]
    if (xx !== yy) {
      this.father[yy] = xx
      return true
    } else {
      return false
    }
  }
}

module.exports = minCostConnectPoints;
