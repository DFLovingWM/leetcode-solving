// 数据结构：并查集
class UnionFind {
  constructor (length) {
    this.father = []
    this.rank = []

    for (let i = 0; i < length; ++i) {
      this.father[i] = i;
      this.rank[i] = 1;
    }
  }

  /**
   * 获取结点所属的"根"
   * @param {number} x 结点
   * @returns {number} 根
   */
  getRoot (x) {
    if (x === this.father[x]) return x
    return this.father[x] = this.getRoot(this.father[x]) // 路径压缩
  }

  /**
   * 查询两个结点是否连通
   * @param {number} x 结点x
   * @param {number} y 结点y
   * @returns {boolean} 是否连通
   */
  find (x, y) {
    return this.getRoot(x) === this.getRoot(y)
  }

  /**
   * 对两个结点建立连通
   * @param {number} x 结点x
   * @param {number} y 结点y
   * @returns {boolean} 是否建立成功：成功说明本来不连通，失败说明本来就连通了
   */
  union (x, y) {
    let xx = this.getRoot(x)
    let yy = this.getRoot(y)

    if (xx === yy) return false

    // 建立连通时，让rank更大的作为“根”
    if (this.rank[xx] <= this.rank[yy]) {
      this.father[xx] = yy;
      if (this.rank[xx] == this.rank[yy]) {
        ++this.rank[yy];
      }
    } else {
      this.father[yy] = xx;
    }
    return true
  }

  // 获取连通分量数
  getBlockCount () {
    const set = new Set()
    for (let i = 0; i < this.father.length; ++i) {
      set.add(this.getRoot(i))
    }
    return set.size
  }
}
