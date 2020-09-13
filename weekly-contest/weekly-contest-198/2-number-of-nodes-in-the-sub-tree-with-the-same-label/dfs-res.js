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

  const res = new Array(n);

  // 返回值：以`i`为子树的字母频次，格式为`{ ch: count }`
  function dfs(curr, prev) {
    const freq = Array.from({ length: 26 }, () => 0);
    ++freq[labels[curr]];

    for (const next of adj[curr]) {
      if (next === prev) continue; // 避免重复遍历
      const subFreq = dfs(next, curr); // 后序遍历
      for (let i = 0; i < 26; ++i) {
        freq[i] += subFreq[i];
      }
    }

    res[curr] = freq[labels[curr]]; // 补充答案
    // console.log(i, freq);
    return freq;
  }

  dfs(0, -1);
  return res;
};

function getCode(ch) {
  return ch.charCodeAt(0) - 'a'.charCodeAt(0);
}

module.exports = countSubTrees;