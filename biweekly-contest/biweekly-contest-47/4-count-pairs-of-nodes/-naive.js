/**
 * 暴力【TLE】
 */
var countPairs = function(n, edges, queries) {
  const degree = Array.from({ length: n + 1 }, () => 0);
  const countMap = new Map();
  for (const [a, b] of edges) {
    degree[a]++;
    degree[b]++;
    const key = getKey(a, b);
    countMap.set(key, (countMap.get(key) || 0) + 1);
  }

  // 暴力二重遍历
  const res = [];
  for (const q of queries) {
    let qv = 0;
    for (let i = 1; i <= n; ++i) {
      for (let j = i + 1; j <= n; ++j) {
        const value = degree[i] + degree[j] - (countMap.get(getKey(i, j)) || 0);
        if (value > q) {
          ++qv;
        }
      }
    }
    res.push(qv);
  }
  return res;
};

function getKey(a, b) {
  if (a < b) {
    [a, b] = [b, a];
  }
  return `${a}|${b}`;
}