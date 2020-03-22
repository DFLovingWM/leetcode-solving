/**
 * 并查集
 */
var hasValidPath = function(grid) {
  const m = grid.length, n = grid[0].length;
  const DIRS = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const uf = new UnionFind(m * n);

  function getKey(i, j) {
    return i * n + j;
  }

  function isValid(ni, nj) {
    return ni >= 0 && ni < m && nj >= 0 && nj < n;
  }

  function isConnected(r1, c1, r2, c2, dir) {
    const p = [grid[r1][c1], grid[r2][c2]];
    let pairs;
    if (dir === 0) { // 上
      pairs = [[2,5,6], [2,3,4]];
    } else if (dir === 1) { // 左
      pairs = [[1,3,5], [1,4,6]];
    } else if (dir === 2) { // 下
      pairs = [[2,3,4], [2,5,6]];
    } else { // 右
      pairs = [[1,4,6], [1,3,5]];
    }
    return pairs.every((_, i) => pairs[i].includes(p[i]));
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      const k1 = getKey(i, j);
      // 看相邻的4个方向，是否可以连通
      for (let k = 0; k < 4; ++k) {
        const ni = i + DIRS[k][0];
        const nj = j + DIRS[k][1];
        if (isValid(ni, nj) && isConnected(i, j, ni, nj, k)) {
          const k2 = getKey(ni, nj);
          uf.union(k1, k2);
        }
      }
    }
  }

  return uf.find(0, m * n - 1);
};

class UnionFind {
  constructor (length) {
    this.father = []
    this.rank = []

    for (let i = 0; i < length; ++i) {
      this.father[i] = i;
      this.rank[i] = 1;
    }
  }

  getRoot (x) {
    if (x === this.father[x]) return x
    return this.father[x] = this.getRoot(this.father[x]) // 路径压缩
  }

  find (x, y) {
    return this.getRoot(x) === this.getRoot(y)
  }

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
}

[
  [[2,4,3],[6,5,2]],
  [[1,2,1],[1,2,1]],
  [[1,1,2]],
  [[1,1,1,1,1,1,3]],
  [[2],[2],[2],[2],[2],[2],[6]]
].forEach(A => {
  console.log(hasValidPath(A))
})