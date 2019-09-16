/**
 * Map + 并查集 + DFS遍历
 */
var accountsMerge = function(accounts) {
  const length = accounts.length

  const email2Index = new Map() // 映射：邮箱=>下标。这是为了让相同邮箱的账户可以“聚集”在一起
  const uf = new UnionFind(length) // 并查集

  for (let i = 0; i < length; ++i) {
    for (const email of accounts[i].slice(1)) {
      if (!email2Index.has(email)) {
        email2Index.set(email, i)
      } else { // 有重复邮箱，说明是同一个人，则合并
        uf.union(email2Index.get(email), i)
      }
    }
  }

  const res = []
  const visited = Array.from({ length }, () => false)

  // DFS，遍历所有森林
  for (let i = 0; i < length; ++i) {
    if (!visited[i]) {
      dfs(i, length, visited, uf, accounts, res)
    }
  }

  return res
};

// 寻找跟`i`属于同一个连通块的所有结点
function dfs (i, n, visited, uf, accounts, res) {
  const emailSet = new Set()
  for (let j = 0; j < n; ++j) {
    if (uf.find(i, j)) { // 发现`j`属于`i`这块
      visited[j] = true
      for (const email of accounts[j].slice(1)) {
        emailSet.add(email)
      }
    }
  }
  const emails = Array.from(emailSet).sort((a, b) => { // 字典升序
    return a < b ? -1 : a === b ? 0 : 1
  })
  res.push([accounts[i][0], ...emails])
}

class UnionFind {
  constructor (length) {
    this.father = Array.from({ length }, (_, i) => i)
  }

  getRoot (x) {
    if (x === this.father[x]) return x
    return this.father[x] = this.getRoot(this.father[x])
  }

  union (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    if (xx !== yy) {
      this.father[xx] = yy
    }
  }

  find (x, y) {
    const xx = this.getRoot(x)
    const yy = this.getRoot(y)
    return xx === yy
  }
}

[
  [
    ["John", "johnsmith@mail.com", "john00@mail.com"], 
    ["John", "johnnybravo@mail.com"], 
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"], 
    ["Mary", "mary@mail.com"]
  ],
].forEach(accs => {
  console.log(accountsMerge(accs))
})