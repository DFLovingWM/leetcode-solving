// 为了检测环，给一个结点设置3种状态
const STATE = {
  UN_VISITED: 0, // 未遍历
  VISITED: 1, // 已遍历
  VISITING: 2 // 遍历中
}

/**
 * DFS
 */
var canFinish = function(n, prerequisites) {
  // 构造邻接表
  const next = Array.from({ length: n }, () => [])
  for (const [to, from] of prerequisites) {
    next[from].push(to)
  }
  // 状态表
  const state = Array.from({ length: n }, () => STATE.UN_VISITED)

  // 逐一遍历
  for (let i = 0; i < n; ++i) {
    if (state[i] === STATE.UN_VISITED) {
      if (!dfs(i, next, state)) {
        return false
      }
    }
  }
  return true
};

// 递归单元：返回true表示无环
function dfs (node, next, state) {
  if (state[node] === STATE.VISITING) {
    // 遇到正在遍历的老结点，表示有环了
    return false
  }

  state[node] = STATE.VISITING
  for (const to of next[node]) {
    if (state[to] !== STATE.VISITED) {
      if (!dfs(to, next, state)) {
        return false
      }
    }
  }
  state[node] = STATE.VISITED
  return true
}

[
  [2, [[1,0]]],
  [2, [[1,0],[0,1]]],
].forEach(input => {
  console.log(canFinish(...input))
})
