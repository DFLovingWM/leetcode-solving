/**
 * BFS？
 */
var frogPosition = function(n, edges, T, target) {
  const adj = Array.from({ length: n + 1 }, () => []); // 邻接表
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const visited = Array.from({ length: n + 1 }, () => false);
  let currs = [];
  currs.push([1, 1]); // [i, prob]
  visited[1] = true;

  for (let t = 0; t < T; ++t) { // t次迭代
    const nexts = [];

    for (const [i, p] of currs) {
      const js = new Set();

      for (const j of adj[i]) {
        if (!visited[j]) {
          js.add(j);
        }
      }

      if (js.size === 0) { // 停留在原地
        nexts.push([i, p]);
      } else { // 扩展
        for (const j of js) {
          nexts.push([j, p / js.size]);
          visited[j] = true;
        }
      }
    }

    currs = nexts;
    // console.log(currs);
  }

  for (const [i, p] of currs) {
    if (i === target) return p;
  }
  return 0;
};