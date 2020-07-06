/**
 * DFS
 * 
 * 超时
 */
var pseudoPalindromicPaths  = function(root) {
  let res = 0;

  function dfs(node, path) {
    // 走这个结点
    path.push(node.val);

    // 叶子结点
    if (!node.left && !node.right) {
      if (isPseudoPalindromic(path)) {
        ++res;
      }
    } else {
      if (node.left) dfs(node.left, path);
      if (node.right) dfs(node.right, path);
    }

    // 回溯
    path.pop();
  }

  dfs(root, []);
  return res;
};

function isPseudoPalindromic(path) {
  const freq = new Array(10).fill(0);
  for (const n of path) {
    ++freq[n];
  }

  let singleCount = 0;
  for (let i = 0; i < 10; ++i) {
    if (freq[i] % 2 === 1) {
      ++singleCount;
    }
  }

  // 单身元素不能超过1个
  return singleCount <= 1;
}
