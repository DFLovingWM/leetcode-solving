/**
 * BFS：可以看作是对【回溯法】的模拟
 * 
 * 时间：72ms
 */
var generateParenthesis = function (n) {
  let curr = [new Node('', 0, 0)]

  for (let i = 0, limit = n * 2; i < limit; ++i) {
    const next = []
    for (const { s, left, right } of curr) {
      if (left < n) {
        next.push(new Node(s + '(', left + 1, right))
      }
      if (right < left) {
        next.push(new Node(s + ')', left, right + 1))
      }
    }
    curr = next
  }

  return curr.map(node => node.s)
};

/**
 * 队列中的结点类型
 * 对应【回溯】中的入参，用以表示状态
 */
function Node (s, left, right) {
  this.s = s
  this.left = left
  this.right = right
}

module.exports = generateParenthesis