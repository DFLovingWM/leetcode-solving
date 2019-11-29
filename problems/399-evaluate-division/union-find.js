/**
 * 并查集（@todo）
 */
var calcEquation = function (equations, values, queries) {
  const var2Node = new Map()
  for (let i = 0; i < equations.length; ++i) {
    const [a, b] = equations[i]
    const value = values[i]
    if (!var2Node.has(a)) var2Node.set(a, new Node())
  }
};

class Node {
  constructor (value = 1) {
    this.value = value // 值
    this.parent = null // 指向父结点（递归结构）
  }
}

class UnionFind {
  constructor () {
    this.father = new Map()
  }
}