/**
 * 层次遍历
 */
var rightSideView = function(root) {
  let res = []
  if (!root) return res
  
  let currs = [root]
  while (currs.length) {
    res.push(currs[currs.length - 1].val)
    const nexts = []
    for (const curr of currs) {
      if (curr.left) {
        nexts.push(curr.left)
      }
      if (curr.right) {
        nexts.push(curr.right)
      }
    }
    currs = nexts
  }
  return res
};