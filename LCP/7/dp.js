/**
 * DP
 */
var numWays = function(N, relation, K) {
  const adj = Array.from({ length: N }, () => []);
  for (const rel of relation) {
    const [a, b] = rel;
    adj[a].push(b);
  }

  const memo = new Map();

  function helper(i, k) {
    if (k === K) {
      if (i === N - 1) return 1;
      return 0;
    }

    const key = `${i},${k}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    for (const j of adj[i]) {
      res += helper(j, k + 1);
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, 0);
};

[
  [5, [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], 3],
  [3, [[0,2],[2,1]], 2],
].forEach(A => {
  console.log(numWays(...A));
})