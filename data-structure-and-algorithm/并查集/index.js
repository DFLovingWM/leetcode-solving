// 数据结构：并查集
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
}
