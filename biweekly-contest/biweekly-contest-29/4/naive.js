/**
 * @param {number} n
 * @param {number[][]} dependencies
 * @param {number} k
 * @return {number}
 */
var minNumberOfSemesters = function(n, dependencies, k) {
  const indeg = Array.from({ length: n + 1 }, () => 0);
  const next = Array.from({ length: n + 1 }, () => []);
  for (const [from, to] of dependencies) {
    ++indeg[to];
    next[from].push(to);
  }
  
  const queue = new Set();
  for (let i = 1; i <= n; ++i) {
    if (indeg[i] === 0) {
      queue.add(i);
    }
  }

  let res = 0;
  for (; queue.size; ++res) {
    // 贪心拿K个
    const arr = [...queue.values()].sort((a, b) => {
      return next[b].length - next[a].length;
    });
    for (let i = 0; i < Math.min(arr.length, k); ++i) {
      const u = arr[i];
      queue.delete(u);
      for (const v of next[u]) {
        if (--indeg[v] === 0) {
          queue.add(v);
        }
      }
    }
  }

  return res;
};

[
  // [5, [[2,1],[3,1],[4,1],[1,5]], 2],
  [9, [[4,8],[3,6],[6,8],[7,6],[4,2],[4,1],[4,7],[3,7],[5,2],[5,9],[3,4],[6,9],[5,7]], 2],
].forEach(A => {
  console.log(minNumberOfSemesters(...A))
})