/**
 * (k+1)维DP
 * 
 * 时间：O(N * 26^K)
 */
var keyboard = function(K, N) {
  const mod = 1e9 + 7;
  const memo = new Map();
  
  // 状态定义：
  // 当前按第`i`次，并且按了k次的字母分别有`ck`
  // 最终按了n次的组合数
  function helper(n, c) {
    if (n === N) return 1;

    const key = [n, ...c].join('|');
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    for (let i = 0; i < K; ++i) {
      if (c[i] > 0) {
        const nextC = [...c];
        --nextC[i]; ++nextC[i + 1];
        res += c[i] * helper(n + 1, nextC);
        res %= mod;
      }
    }
    memo.set(key, res);
    return res;
  }

  const c = Array.from({ length: K }, () => 0);
  c[0] = 26;
  return helper(0, c);
};

module.exports = keyboard;
