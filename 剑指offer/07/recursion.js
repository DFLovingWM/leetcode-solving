/**
 * 重建树，肯定用递归最好
 * 
 * 时间：O(N^2), 152ms
 * 空间：O(N), 127.4MB
 */
var buildTree = function (p, i) {

  // 递归函数：每次选出一个根结点（返回值为子根）
  function build(preorders, inorders) {
    if (preorders.length === 0) return null;

    const subRoot = new TreeNode(preorders[0]); // 前序首元素作为子根
    const index = inorders.indexOf(preorders[0]); // 分割点
    subRoot.left = build(preorders.slice(1, 1 + index), inorders.slice(0, index));
    subRoot.right = build(preorders.slice(1 + index), inorders.slice(index + 1));
    return subRoot;
  }

  return build(p, i);
};