/**
 * 层次遍历裸题
 */
var levelOrder = function (root) {
  const res = [];
  if (!root) return res;

  let currs = [root];
  while (currs.length > 0) {
    // 本层
    res.push(currs.map(node => node.val));
    // 下一层
    const nexts = [];
    for (const curr of currs) {
      if (curr.left) nexts.push(curr.left);
      if (curr.right) nexts.push(curr.right);
    }
    currs = nexts;
  }
  return res;
};