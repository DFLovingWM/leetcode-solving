const STATE = {
  UN_VISITED: 0, // 未遍历
  VISITED: 1, // 已遍历
  VISITING: 2 // 遍历中
}

/**
 * DFS法，求拓扑序列
 */
var findOrder = function(n, prerequisites) {
  const state = Array.from({ length: n }, () => STATE.UN_VISITED) // 状态表
  const next = Array.from({ length: n }, () => []) // 邻接表
  for (const [to, from] of prerequisites) {
    next[from].push(to)
  }

  const seq = new Stack()
  let i
  for (i = 0; i < n; ++i) {
    if (state[i] !== STATE.VISITED) {
      if (!dfs(i, next, state, seq)) {
        break
      }
    }
  }
  if (i < n) {
    // 有环，则返回空数组
    return []
  }
  // 无环，则取出序列
  const res = []
  while (!seq.empty()) {
    res.push(seq.pop())
  }
  return res
};

function dfs (i, next, state, seq) {
  if (state[i] === STATE.VISITING) {
    // 检测到环
    return false
  }

  state[i] = STATE.VISITING
  for (const j of next[i]) {
    if (state[j] !== STATE.VISITED) {
      if (!dfs(j, next, state, seq)) {
        return false
      }
    }
  }

  seq.push(i)
  state[i] = STATE.VISITED
  return true
}

class Stack {
  constructor () {
    this.arr = []
  }

  push (x) {
    this.arr.push(x)
  }

  pop () {
    return this.arr.pop()
  }

  empty () {
    return this.arr.length === 0
  }
}

[
  [2, [[1,0]]],
  [4, [[1,0],[2,0],[3,1],[3,2]]],
  [3, [[1,0],[1,2],[0,1]]],
].forEach(input => {
  console.log(findOrder(...input))
})
