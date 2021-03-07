/**
 * BFS层次遍历
 */

// BFS结点即状态
function Node(s, left, right) {
  this.s = s;
  this.left = left;
  this.right = right;
}

var generateParenthesis = function(n) {
  let prevs = [new Node('', 0, 0)]; // 上一层的结点

  // 每次添加1个括号，总共要添加2N个括号，所以循环2N次
  for (let i = 0; i < 2 * n; ++i) {
    const currs = []; // 本层的新结点

    for (const { s, left, right } of prevs) {
      if (left + 1 <= n) {
        currs.push(new Node(s + '(', left + 1, right));
      }
      if (right + 1 <= left) {
        currs.push(new Node(s + ')', left, right + 1));
      }
    }

    prevs = currs; // 层次替换：到下一层时，本层就变为“上一层”
  }

  return prevs.map(node => node.s);
};