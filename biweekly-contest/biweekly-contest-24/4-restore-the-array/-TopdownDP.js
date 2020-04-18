/**
 * Top-down DP
 */
var numberOfArrays = function(s, k) {
  const MOD = 1e9 + 7;
  const n = s.length;
  const memo = Array.from({ length: n }, () => -1);

  function helper(i) {
    if (i >= s.length) return 1;
    if (memo[i] !== -1) return memo[i];

    // 不能是前导0，而且增加的数字在k之内
    if (s[i] === '0') return 0; // 前导0 => fail
    let res = 0;
    let num = 0;
    for (let j = i; j < n; ++j) {
      num = num * 10 + Number(s[j]);
      if (num > k) break;
      res += helper(j + 1);
      res %= MOD;
    }
    return memo[i] = res;
  }

  return helper(0);
};

module.exports = numberOfArrays;