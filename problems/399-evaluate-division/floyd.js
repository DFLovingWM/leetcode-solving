/**
 * Floyd
 * 
 * 时间：`O(N^3)`, 92ms
 */
var calcEquation = function(equations, values, queries) {
  // 1. 将所有出现的变量，映射为下标（结点）
  let variables = new Set()
  for (const [a, b] of equations) {
    variables.add(a)
    variables.add(b)
  }
  variables = Array.from(variables) // 下标 => 变量
  let var2Index = new Map() // 变量 => 下标
  for (let i = 0; i < variables.length; ++i) {
    var2Index.set(variables[i], i)
  }

  // 2. 建立二维邻接矩阵
  const n = variables.length // 共有N个结点
  const graph = Array.from({ length: n }, () => Array.from({ length: n }, () => -1)) // 邻接矩阵：因为结果都是正数，-1表示不存在
  for (let i = 0; i < equations.length; ++i) {
    const [varA, varB] = equations[i]
    const [a, b] = [var2Index.get(varA), var2Index.get(varB)]
    const weight = values[i]
    graph[a][b] = weight
    graph[b][a] = 1 / weight // 因为是无向图，所以需要倒数
  }

  // 3. 开始Floyd
  for (let k = 0; k < n; ++k) { // 中间点
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        if (graph[i][k] > 0 && graph[k][j] > 0 && graph[i][j] < 0) { // 如果[i,j]没有通路，但是i、j跟k都相通，则打通[i,j]
          graph[i][j] = graph[i][k] * graph[k][j]
        }
      }
    }
  }

  // 4. 解答
  const res = []
  for (const [varA, varB] of queries) {
    if (!var2Index.has(varA) || !var2Index.has(varB)) {
      res.push(-1)
      continue
    }

    const [a, b] = [var2Index.get(varA), var2Index.get(varB)]
    if (graph[a][b] > 0) {
      res.push(graph[a][b])
    } else if (graph[b][a] > 0) {
      res.push(graph[b][a])
    } else {
      res.push(-1)
    }
  }
  return res
};

module.exports = calcEquation