/**
 * BFS：子结点下标为`2n+1`、`2n+2`
 * 
 * 时间：`O(N)`, 64ms
 */
var widthOfBinaryTree = function (root) {
  let res = 0
  let currs = []
  currs.push([root, 0])

  while (currs.length > 0) {
    const nexts = []
    for (const [curr, i] of currs) {
      if (curr.left) nexts.push([curr.left, 2 * i + 1])
      if (curr.right) nexts.push([curr.right, 2 * i + 2])
    }
    const tmp = currs.length === 1 ? 1 : currs[currs.length - 1][1] - currs[0][1] + 1 // 对付会溢出的那个test case
    res = Math.max(res, tmp) // 更新答案
    currs = nexts
  }

  return res
};

module.exports = widthOfBinaryTree