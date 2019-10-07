/**
 * DFS涂色
 */
const MOD = 1e9 + 7

const TYPE = {
  SELF: 1, // 只增加自己
  SPREAD: 2, // 增加子树
  QUERY: 3, // 查询
}

var bonus = function (n, edges, operations) {
  const nexts = Array.from({ length: n + 1 }, () => []) // 邻接表
  const weights = Array.from({ length: n + 1 }, () => 0) // 权重
  for (const [from, to] of edges) {
    nexts[from].push(to)
  }

  const res = []
  for (const [type, i, weight] of operations) {
    if (type === TYPE.SELF) {
      weights[i] = (weights[i] + weight) % MOD
    } else if (type === TYPE.SPREAD) {
      dfs(nexts, weights, i, weight)
    } else if (type === TYPE.QUERY) {
      res.push(weights.reduce((a, b) => (a % MOD + b % MOD) % MOD, 0))
    }
  }

  return res
};

function dfs (nexts, weights, curr, weight, visit = new Set()) {
  weights[curr] = (weights[curr] + weight) % MOD

  for (const next of nexts[curr]) {
    if (!visit.has(next)) {
      visit.add(curr)
      dfs(nexts, weights, next, weight, visit)
    }
  }
}

console.log(bonus(
  6,
  [[1, 2], [1, 6], [2, 3], [2, 5], [1, 4]],
  [[1, 1, 500], [2, 2, 50], [3, 1], [2, 6, 15], [3, 1]]
))