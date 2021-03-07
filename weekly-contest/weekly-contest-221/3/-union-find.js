/**
 * 并查集
 */
var findBall = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const uf = new UnionFind(m * n * 4);
  const [Top, Right, Bottom, Left] = [0, 1, 2, 3];
  const getKey = (r, c, dir) => r * (n * 4) + c * 4 + dir;

  // 遍历每个格子
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // 自身
      if (grid[i][j] === 1) {
        uf.union(getKey(i, j, Top), getKey(i, j, Right));
        uf.union(getKey(i, j, Bottom), getKey(i, j, Left));
      } else {
        uf.union(getKey(i, j, Right), getKey(i, j, Bottom));
        uf.union(getKey(i, j, Left), getKey(i, j, Top));
      }

      // 右
      if (j + 1 < n) {
        uf.union(getKey(i, j, Right), getKey(i, j + 1, Left));
      }
      // 下
      if (i + 1 < m) {
        uf.union(getKey(i, j, Bottom), getKey(i + 1, j, Top));
      }
      // 左
      if (j - 1 >= 0) {
        uf.union(getKey(i, j, Left), getKey(i, j - 1, Right));
      }
    }
  }

  const res = Array.from({ length: n }, () => -1);
  for (let j = 0; j < n; ++j) {
    for (let j2 = 0; j2 < n; ++j2) {
      if (uf.find(getKey(0, j, Top), getKey(m - 1, j2, Bottom))) {
        res[j] = j2;
        break;
      }
    }
  }
  return res;
};

module.exports = findBall;

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
