/**
 * 并查集 + 筛法
 * 
 * 时间：O(N^2), 200ms
 */
var areConnected = function(n, threshold, queries) {
  const uf = new UnionFind(n + 1);
  for (let k = threshold + 1; k <= n; ++k) { // 倍数k（比threshold大）
    const root = k; // 1倍，作为根
    for (let i = k * 2; i <= n; i += k) { // 多倍，与根联通
      uf.union(root, i);
    }
  }

  const res = [];
  for (const [x, y] of queries) {
    res.push(uf.find(x, y));
  }
  return res;
};

// 并查集
class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, (_, i) => i)
    this.rank = Array.from({ length }, () => 1)
  }

  getRoot (x) {
    if (this.father[x] === x) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  union (x, y) {
    let xx = this.getRoot(x)
    let yy = this.getRoot(y)
    if (xx === yy) return
    if (this.rank[xx] < this.rank[yy]) {
      [xx, yy] = [yy, xx]
    }
    this.father[yy] = xx
    this.rank[xx] += this.rank[yy]
  }

  find (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    return xx === yy
  }
}
