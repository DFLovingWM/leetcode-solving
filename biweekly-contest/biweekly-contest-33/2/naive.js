/**
 * 图
 */
var findSmallestSetOfVertices = function(n, edges) {
  const indeg = Array.from({ length: n }, () => 0);
  for (const [a, b] of edges) {
    ++indeg[b];
  }

  let res = [];
  for (let i = 0; i < n; ++i) {
    if (indeg[i] === 0) {
      res.push(i);
    }
  }
  return res;
};