/**
 * Kruskal
 */
var maxNumEdgesToRemove = function(n, edges) {
  // 给边分类
  const edgeMap = Array.from({ length: 3 }, () => []);
  for (let [type, u, v] of edges) {
    --type;
    --u;
    --v;
    edgeMap[type].push([u, v]);
  }

  const uf = new UnionFind(n);

  // 首选C边
  let c = 0;
  for (const [u, v] of edgeMap[2]) {
    if (!uf.find(u, v)) {
      ++c;
      uf.union(u, v);
    }
  }

  // A
  const A = UnionFind.copy(uf);
  let a = 0;
  for (const [u, v] of edgeMap[0]) {
    if (!A.find(u, v)) {
      ++a;
      A.union(u, v);
    }
  }

  // B
  const B = UnionFind.copy(uf);
  let b = 0;
  for (const [u, v] of edgeMap[1]) {
    if (!B.find(u, v)) {
      ++b;
      B.union(u, v);
    }
  }

  if (A.checkAll() && B.checkAll()) {
    return edgeMap[0].length + edgeMap[1].length + edgeMap[2].length
      - c - a - b;
  }
  return -1;
};

class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, (_, index) => index)
  }

  // 获取根
  getRoot (x) {
    if (x === this.father[x]) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  // 查询两个结点是否属于同一棵树
  find (x, y) {
    return this.getRoot(x) === this.getRoot(y)
  }

  // 合并两个结点
  union (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    if (xx !== yy) {
      this.father[xx] = yy
    }
  }

  // 检查是否所有点都联通
  checkAll() {
    for (let i = 1; i < this.father.length; ++i) {
      if (!this.find(0, i)) {
        return false;
      }
    }
    return true;
  }

  static copy(uf) {
    const res = new UnionFind();
    res.father = uf.father.slice();
    return res;
  }
}
