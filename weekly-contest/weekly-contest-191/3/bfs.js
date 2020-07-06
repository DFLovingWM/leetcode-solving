/**
 * BFS
 * 
 * 时间：O(N)？420ms
 */
var minReorder = function(n, connections) {
  // 邻接表
  const nexts = Array.from({ length: n }, () => []);
  const prevs = Array.from({ length: n }, () => []);
  for (const [from, to] of connections) {
    nexts[from].push(to);
    prevs[to].push(from);
  }

  const queue = [0];
  const visit = new Set([0]);
  let res = 0;

  while (queue.length > 0) {
    const i = queue.shift();

    for (const j of prevs[i]) {
      if (!visit.has(j)) {
        visit.add(j);
        queue.push(j);
      }
    }

    for (const j of nexts[i]) {
      if (!visit.has(j)) {
        visit.add(j);
        queue.push(j);
        ++res;
      }
    }
  }

  return res;
};

[
  [6, [[0,1],[1,3],[2,3],[4,0],[4,5]]],
  [5, [[1,0],[1,2],[3,2],[3,4]]],
  [3, [[1,0],[2,0]]],
].forEach(A => {
  console.log(minReorder(...A))
})