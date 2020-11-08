/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
  const n = words.length;
  const m = words[0].length;
  const freqs = Array.from({ length: m }, () => new Map());
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      const freq = freqs[i];
      const ch = words[j][i];
      freq.set(ch, (freq.get(ch) || 0) + 1);
    }
  }

  const mod = 1e9 + 7;
  const memo = new Map();

  function f(i, j) {
    if (j === target.length) {
      return 1;
    }
    if (i === m) {
      return 0;
    }

    const key = `${i},${j}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let res = 0;
    // 不取
    res += f(i + 1, j);
    res %= mod;
    // 从i上取
    const ch = target[j];
    if (freqs[i].has(ch)) {
      res += freqs[i].get(ch) * f(i + 1, j + 1);
      res %= mod;
    }
    memo.set(key, res);
    return res;
  }

  return f(0, 0);
};