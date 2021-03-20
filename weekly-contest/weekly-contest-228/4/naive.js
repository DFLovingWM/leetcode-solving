/**
 * 暴力：遍历每个三元组
 */
var minTrioDegree = function(n, edges) {
  const deg = Array.from({ length: n + 1 }, () => 0);
  const adj = Array.from({ length: n + 1 }, () => new Set());
  for (const [a, b] of edges) {
    ++deg[a];
    ++deg[b];
    adj[a].add(b);
    adj[b].add(a);
  }

  function is3Tuple(i, j, k) {
    const arr = [i, j, k];
    return arr.every(a => (
      arr.every(b => (
        a === b || adj[a].has(b)
      ))
    ));
  }

  let res = Infinity;
  for (let i = 1; i <= n; ++i) {
    for (let j = i + 1; j <= n; ++j) {
      for (let k = j + 1; k <= n; ++k) {
        if (is3Tuple(i, j, k)) {
          const d = deg[i] + deg[j] + deg[k] - 2 * 3;
          res = Math.min(res, d);
        }
      }
    }
  }
  return res === Infinity ? -1 : res;
};

[
  [6, [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]],
  [7, [[1,3],[4,1],[4,3],[2,5],[5,6],[6,7],[7,5],[2,6]]],
].forEach(A => {
  console.log(minTrioDegree(...A))
})
