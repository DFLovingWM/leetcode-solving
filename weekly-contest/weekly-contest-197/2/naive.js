/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
  const MOD = 1e9 + 7;
  let res = 0;

  let acc = 0;
  for (const ch of s) {
    if (ch === '0') {
      res += getPairs(acc);
      res %= MOD;
      acc = 0;
    } else {
      ++acc;
    }
  }
  
  // 最后的
  res += getPairs(acc);
  res %= MOD;

  return res;
};

function getPairs(n) {
  return (1 + n) * n / 2;
}
