/**
 * BFS
 * 
 * 时间：O(N), 52ms
 * 空间：O(L), 35.8MB
 */
var isSymmetric = function (root) {
  let currs = [root];

  while (currs.length > 0) {
    if (!isSym(currs)) return false;

    const nexts = [];
    for (const curr of currs) {
      if (curr) {
        nexts.push(curr.left);
        nexts.push(curr.right);
      }
    }
    currs = nexts;
  }

  return true;
};

// 判断数组是否对称(回文)
function isSym(nodes) {
  let L = 0, R = nodes.length - 1;
  while (L < R) {
    if (!nodes[L] && nodes[R] || nodes[L] && !nodes[R]) return false;
    if (nodes[L] && nodes[R] && nodes[L].val !== nodes[R].val) return false;
    ++L;
    --R;
  }
  return true;
}