/**
 * 回溯 + 并查集
 * 
 * 时间：528ms
 */

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

const pair = preProcess()

function preProcess () {
  const uf = new UnionFind(10)

  // 1379
  uf.union(1, 3)
  uf.union(3, 7)
  uf.union(7, 9)

  // 28
  uf.union(2, 8)

  // 46
  uf.union(4, 6)

  return uf
}

var numberOfPatterns = function (min, max) {
  let res = 0
  const used = new Set()
  
  /**
   * 递归函数
   * @param {number} prev 上一次选择的数字
   */
  function backtrack (prev) {
    const len = used.size

    if (len > max) return
    if (len >= min) ++res

    for (let curr = 1; curr <= 9; ++curr) {
      if (!used.has(curr)) {
        // 能连接的2个数字需要满足：
        // 不隔着数字，或者隔着的数字已被使用
        if (!pair.find(curr, prev) || used.has((curr + prev) / 2)) {
          used.add(curr)
          backtrack(curr)
          used.delete(curr)
        }
      }
    }
  }

  backtrack(-1)
  return res
};

module.exports = numberOfPatterns