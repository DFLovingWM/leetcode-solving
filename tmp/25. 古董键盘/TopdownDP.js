/**
 * 6维DP：c5没用，可以只保留6维
 * 
 * 时间：O(N * 26^K)
 */
var keyboard = function(k, n) {
  const mod = 1e9 + 7;
  const memo = new Map();
  
  function helper(...args) {
    const key = args.join('|');
    if (memo.has(key)) {
      return memo.get(key);
    }

    // 状态定义：
    // 当前按第`i`次，并且按了k次的字母分别有`ck`
    // 最终按了n次的组合数
    const [i, c0, c1, c2, c3, c4] = args;

    if (i === n) {
      return 1;
    }

    let res = 0;
    // 从c0中挑一个字母，将它按第1次
    if (c0 > 0) {
      res += c0 * helper(i + 1, c0 - 1, c1 + 1, c2, c3, c4);
      res %= mod;
    }
    // 从c1中挑一个字母
    if (k >= 2 && c1 > 0) {
      res += c1 * helper(i + 1, c0, c1 - 1, c2 + 1, c3, c4);
      res %= mod;
    }
    // 从c2中挑一个字母
    if (k >= 3 && c2 > 0) {
      res += c2 * helper(i + 1, c0, c1, c2 - 1, c3 + 1, c4);
      res %= mod;
    }
    // 从c3中挑一个字母
    if (k >= 4 && c3 > 0) {
      res += c3 * helper(i + 1, c0, c1, c2, c3 - 1, c4 + 1);
      res %= mod;
    }
    // 从c4中挑一个字母
    if (k >= 5 && c4 > 0) {
      res += c4 * helper(i + 1, c0, c1, c2, c3, c4 - 1);
      res %= mod;
    }

    memo.set(key, res);
    return res;
  }

  return helper(0, 26, 0, 0, 0, 0);
};

module.exports = keyboard;
