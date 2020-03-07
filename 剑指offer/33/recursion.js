/**
 * 递归
 */
var verifyPostorder = function (postorder) {
  const inorder = postorder.slice().sort((a, b) => a - b); // 排序后得到中序
  return check(postorder, inorder);
};

// 后 + 中 => 尝试建树
// 返回值：表示能否建成功（树是否存在）
function check(postOrders, inOrders) {
  if (postOrders.length === 0 && inOrders.length === 0) return true;

  // 分割
  const rootVal = postOrders[postOrders.length - 1];
  let i = 0;
  for (; i < inOrders.length; ++i) {
    if (inOrders[i] === rootVal) break;
  }
  const inOrder = new Set(inOrders.slice(0, i)); // 左子树的值集合
  const postOrder = new Set(postOrders.slice(0, i)); // 右子树的值集合

  // 左子树不匹配 => 提前失败
  if (!same(inOrder, postOrder)) return false;
  // 递归
  return check(postOrders.slice(0, i), inOrders.slice(0, i)) && // 左子树
    check(postOrders.slice(i, postOrders.length - 1), inOrders.slice(i + 1)); // 右子树
}

// 判断集合相等
function same(set1, set2) {
  if (set1.size !== set2.size) return false;
  for (const val of set1) {
    if (!set2.has(val)) return false;
  }
  return true;
}