/**
 * 二分枚举(minMax) + 子方法
 */
var minimumEffortPath = function(mat) {
  let [left, right] = [0, 1e6];
  while (left < right) {
    const mid = left + (right - left >>> 1);
    // 检查`mid`是否满足
    // 如果满足，则看有没有更小的
    if (check2(mat, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

/**
 * 子思路1：并查集
 * 1. 连接所有 <=k 的边
 * 2. 看首尾是否连通
 * 
 * 时间：O(N^2 * logX), 552ms
 */
function check1(mat, k) {
  const [m, n] = [mat.length, mat[0].length];

  function isValid(r, c) {
    return r >= 0 && r < m && c >= 0 && c < n;
  }

  function getKey(r, c) {
    return r * n + c;
  }

  const uf = new UnionFind(m * n);
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // 4边之中，小于等于k的，才允许建立连通
      for (const [io, jo] of [[1,0], [0,1], [-1,0], [0,-1]]) {
        const ni = i + io;
        const nj = j + jo;
        if (isValid(ni, nj) && Math.abs(mat[i][j] - mat[ni][nj]) <= k) {
          uf.union(getKey(i, j), getKey(ni, nj));
        }
      }
    }
  }
  // 看是否存在一条路径使得头尾连通
  return uf.find(getKey(0, 0), getKey(m-1, n-1));
}

/**
 * 子思路2：着色方案(DFS/BFS)
 * 从head出发扩展，看能否到达tail
 * 
 * 时间：O(N^2 * logX), 808ms
 */
function check2(mat, k) {
  const [m, n] = [mat.length, mat[0].length];
  const visit = Array.from({ length: m }, () => Array.from({ length: n }, () => false));

  function isValid(r, c) {
    return r >= 0 && r < m && c >= 0 && c < n;
  }

  const Q = [[0, 0]];
  visit[0][0] = true;
  while (Q.length > 0) {
    const [r, c] = Q.shift();
    for (const [ro, co] of [[1,0], [0,1], [-1,0], [0,-1]]) {
      const [nr, nc] = [r + ro, c + co];
      if (
        isValid(nr, nc) &&
        Math.abs(mat[nr][nc] - mat[r][c]) <= k &&
        !visit[nr][nc]
      ) {
        // 入队
        Q.push([nr, nc]);
        // 并标记
        visit[nr][nc] = true;
      }
    }
  }
  // 看是否可达
  return visit[m-1][n-1];
}

// ============================= 分割线 =============================

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
}

module.exports = minimumEffortPath;
