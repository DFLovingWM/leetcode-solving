/**
 * 拓扑排序
 */
var minimumSemesters = function (N, relations) {
  const indeg = Array.from({ length: N + 1 }, () => 0) // 入度表
  const adj = Array.from({ length: N + 1 }, () => []) // 邻接表
  for (const [from, to] of relations) {
    ++indeg[to]
    adj[from].push(to)
  }

  let cnt = 0
  let currs = []
  for (let i = 1; i <= N; ++i) {
    if (indeg[i] === 0) {
      ++cnt
      currs.push(i)
    }
  }
  if (currs.length === 0) return -1 // 没有入度为0的结点 => 即有环 => 直接失败

  let level = 0
  for (; currs.length > 0; ++level) {
    const nexts = []
    for (const i of currs) {
      for (const j of adj[i]) {
        --indeg[j]
        if (indeg[j] === 0) {
          ++cnt
          nexts.push(j)
        }
      }
    }
    currs = nexts
  }

  if (cnt === N) return level
  return -1 // 经历结点数少于总结点数 => 边不够 => 失败
};

[
  [3, [[1,3],[2,3]]],
  [3, [[1,2],[2,3],[3,1]]],
].forEach(input => {
  console.log(minimumSemesters(...input))
})