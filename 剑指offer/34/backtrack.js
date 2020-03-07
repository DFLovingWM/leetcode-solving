/**
 * 回溯
 */
var pathSum = function (root, target) {
  const res = [];

  // `node`表示待遍历结点
  function dfs(node, acc, sum) {
    if (!node) return;

    // 探索
    acc.push(node.val);
    sum += node.val;
    if (!node.left && !node.right) { // 叶子结点 => 检测路径
      if (sum === target) {
        res.push(acc.slice());
      }
    } else {
      dfs(node.left, acc, sum);
      dfs(node.right, acc, sum);
    }

    // 回溯
    acc.pop();
    sum -= node.val;
  }

  dfs(root, [], 0);
  return res;
};