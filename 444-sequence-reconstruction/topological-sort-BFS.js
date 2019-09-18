/**
 * 拓扑排序：判断从seqs这些边中是否能构建唯一的拓扑序列T，并且T就是org
 */
var sequenceReconstruction = function(org, seqs) {
  const [nodes, nodeMap] = makeNodes(seqs)
  const n = nodes.length // 结点数
  if (n !== new Set(org).size) {
    // 如果结点集都不同，不用求序列了，直接返回false
    return false
  }

  const next = Array.from({ length: n }, () => [])
  const indeg = Array.from({ length: n }, () => 0)
  for (const seq of seqs) {
    if (seq.length >= 2) {
      for (let i = 1; i < seq.length; ++i) {
        const [a, b] = [nodeMap.get(seq[i - 1]), nodeMap.get(seq[i])]
        next[a].push(b)
        ++indeg[b]
      }
    }
  }
  
  const queue = new Queue()
  const res = []
  for (let i = 0; i < n; ++i) {
    if (indeg[i] === 0) {
      queue.push(i)
    }
  }

  if (queue.size() > 1) {
    // 起始结点超过1，不唯一
    return false
  }

  while (!queue.empty()) {
    const i = queue.popFront()
    res.push(i)

    let newCount = 0
    for (const j of next[i]) {
      --indeg[j]
      if (indeg[j] === 0) {
        ++newCount
        queue.push(j)
      }
    }
    if (newCount > 1) {
      // 新加入结点超过1，不唯一
      return false
    }
  }

  return res.length === org.length && res.every((item, index) => nodes[res[index]] === org[index]) // 判断是否与给定的序列相等
};

function makeNodes (seqs) {
  let nodes = new Set()
  for (const seq of seqs) {
    for (const number of seq) {
      nodes.add(number)
    }
  }
  nodes = Array.from(nodes)

  const nodeMap = new Map()
  for (let i = 0; i < nodes.length; ++i) {
    nodeMap.set(nodes[i], i)
  }

  return [nodes, nodeMap]
}

class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  empty () {
    return this.arr.length === 0
  }

  size () {
    return this.arr.length
  }

  push (x) {
    this.arr.push(x)
  }

  popFront () {
    return this.arr.shift()
  }
}

// [
//   [[1,2,3], [[1,2],[1,3]]],
//   [[1,2,3], [[1,2]]],
//   [[1], [[],[]]],
//   [[1], [[1],[1],[1]]],
//   [[1,2,3,4,5], [[1,2,3,4,5]]],
//   [[5,3,2,4,1], [[5,3,2,4],[4,1],[1],[3],[2,4],[1000000000]]],
//   [[1,2,3], [[1,2],[1,3],[2,3]]],
//   [[1], [[1],[2,3],[3,2]]],
// ].forEach(input => {
//   console.log(sequenceReconstruction(...input))
// })
