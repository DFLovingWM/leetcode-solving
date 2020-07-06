/**
 * 状压DP
 */
var minNumberOfSemesters = function(n, dependencies, k) {
  const indeg = Array.from({ length: n }, () => 0);
  const next = Array.from({ length: n }, () => []);
  for (let [from, to] of dependencies) {
    --from;
    --to;
    ++indeg[to];
    next[from].push(to);
  }

  let zero = 0;
  for (let i = 0; i < n; ++i) {
    if (indeg[i] === 0) {
      zero |= 1 << i;
    }
  }
  const memo = new Map();

  // DP函数
  function helper(cover, zeroIndeg) {
    if (cover === (1 << n) - 1) return 0;

    const key = `${cover}|${indeg}`;
    if (memo.has(key)) return memo.get(key);

    for (let t = k; t && zeroIndeg)
  }

  return helper(0, zero);
};