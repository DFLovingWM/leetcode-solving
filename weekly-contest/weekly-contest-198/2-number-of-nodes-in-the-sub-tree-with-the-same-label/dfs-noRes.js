/**
 * 子树和问题：后序遍历/DP
 * 
 * 需要当作图、而非树，边的先后顺序才没有影响
 */
var countSubTrees = function(n, edges, labels) {
  // 字母转为数字
  labels = Array.from(labels).map(ch => getCode(ch));
  // 邻接表
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }
  // 所有结点的字母频次
  const allFreq = Array.from({ length: n }, () => (
    Array.from({ length: 26 }, () => 0)
  ));

  function dfs(curr, prev) {
    const freq = allFreq[curr];
    ++freq[labels[curr]];
    for (const next of adj[curr]) {
      if (next === prev) continue; // 避免重复遍历
      dfs(next, curr); // 后序遍历
      const subFreq = allFreq[next];
      for (let i = 0; i < 26; ++i) {
        freq[i] += subFreq[i];
      }
    }
  }

  dfs(0, -1);
  return allFreq.map((f, i) => f[labels[i]]);
};

function getCode(ch) {
  return ch.charCodeAt(0) - 'a'.charCodeAt(0);
}

module.exports = countSubTrees;