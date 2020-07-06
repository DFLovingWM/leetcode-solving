/**
 * 倍增
 * 
 * 时间：616ms
 */

// O(NlogN)
var TreeAncestor = function(n, parent) {
  // dp[i][j]表示结点`i`往上第`2^j`个祖先
  const dp = Array.from({ length: n }, () => []);
  // 初始化
  for (let i = 0; i < n; ++i) {
    dp[i].push(parent[i]);
  }
  // 迭代
  for (let j = 1; true; ++j) {
    let done = true;
    for (let i = 0; i < n; ++i) { // 每个结点
      const prev = dp[i][j - 1];
      const curr = prev === -1 ? -1 : dp[prev][j - 1];
      dp[i].push(curr);
      if (curr !== -1) done = false;
    }
    if (done) break; // 所有结点都往上求到-1了，就可以结束DP了
  }

  this.dp = dp;
};

// O(logN)
TreeAncestor.prototype.getKthAncestor = function(node, k) {
  for (let i = 0; k > 0 && node !== -1; ++i, k >>>= 1) {
    if (k & 1) {
      if (i >= this.dp[node].length) return -1;
      node = this.dp[node][i];
    }
  }
  return node;
};

module.exports = TreeAncestor;