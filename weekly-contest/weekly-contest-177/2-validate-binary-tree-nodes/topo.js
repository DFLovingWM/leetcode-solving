/**
 * 拓扑排序
 * 
 * 时间：O(N), 96ms
 * 空间：O(N), 37.8
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  // 求入度
  const indeg = Array.from({ length: n }, () => 0);
  for (const i of leftChild.concat(rightChild)) {
      if (i !== -1) {
          ++indeg[i];
          if (indeg[i] > 1) return false;
      }
  }

  // 拓扑排序的初始化
  const queue = [];
  for (let i = 0; i < n; ++i) {
      if (indeg[i] === 0) {
          queue.push(i);
          if (queue.length > 1) return false;
      }
  }

  return queue.length === 1;
};