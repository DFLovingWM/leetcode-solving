/**
 * O(N)
 */
var TreeAncestor = function(n, parent) {
  const path = new Array(n);

  const parent2Child = Array.from({ length: n }, () => []);
  for (const [c, p] of parent.entries()) {
    if (p === -1) continue;
    parent2Child[p].push(c);
  }
  
  function dfs(i, acc) {
    acc.push(i);
    path[i] = acc.slice();

    for (const j of parent2Child[i]) {
      dfs(j, acc);
    }
    acc.pop();
  }

  dfs(0, []);
  this.path = path;
};

/** 
 * O(1)
 */
TreeAncestor.prototype.getKthAncestor = function(node, k) {
  const path = this.path[node];
  const n = path.length;
  const res = k >= n ? -1 : path[n - k - 1];
  return res;
};

module.exports = TreeAncestor;