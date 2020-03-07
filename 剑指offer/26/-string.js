/**
 * 化为字符串，再比较
 */
var isSubStructure = function (A, B) {
  const b = tree2String(B);
  if (!b) return false;
  const a = tree2String(A);
  return a.includes(b);
};

// 将树编码成字符串（DFS）
function tree2String(root) {
  if (!root) return '';
  
  let res = '';
  res += root.val;
  if (root.left) res += 'L' + tree2String(root.left);
  if (root.right) res += 'R' + tree2String(root.right);
  return res;
}