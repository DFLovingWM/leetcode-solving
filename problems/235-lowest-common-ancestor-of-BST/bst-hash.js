/**
 * 二叉搜索树沿着唯一路径找
 * 
 * 时间：`O(H)`, 96ms
 */
var lowestCommonAncestor = function (root, p, q) {
  const pp = getPath(root, p)
  const qq = getPath(root, q)

  for (let i = 0; true; ++i) {
    if (i < pp.length && i < qq.length) {
      if (pp[i] !== qq[i]) return pp[i - 1]
    } else if (i >= pp.length) {
      return pp[i - 1]
    } else {
      return qq[i - 1]
    }
  }
};

function getPath (root, target) {
  const res = []
  while (root !== target) {
    res.push(root)
    if (root.val > target.val) {
      root = root.left
    } else {
      root = root.right
    }
  }
  res.push(target)
  return res
}