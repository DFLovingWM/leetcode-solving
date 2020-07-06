/**
 * DFS + 位压缩
 */
var pseudoPalindromicPaths  = function(root) {
  let res = 0;

  function dfs(node, path) {
    path ^= 1 << node.val;
    
    if (!node.left && !node.right) {
      if (isPseudoPalindromic(path)) {
        ++res;
      }
    } else {
      if (node.left) dfs(node.left, path);
      if (node.right) dfs(node.right, path);
    }
  }

  dfs(root, 0);
  return res;
};

/**
 * 判断是否伪回文
 * 偶回文：全0
 * 奇回文：只有1个1
 * 能统一为一种情况
 */
function isPseudoPalindromic(x) {
  return !(x & (x - 1));
}
