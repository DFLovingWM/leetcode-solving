/**
 * 数学运算
 */
var countHomogenous = function(s) {
  const mod = 1e9 + 7;
  let res = 0;

  let acc = 1;
  let prevCh = s[0];
  // 开始
  for (const ch of s.slice(1)) {
    if (ch === prevCh) {
      ++acc;
    } else {
      res += getSum(acc);
      res %= mod;
      acc = 1;
    }
    prevCh = ch;
  }
  // 最后一次
  res += getSum(acc);
  res %= mod;

  return res;
};

function getSum(n) {
  return n * (n + 1) / 2;
}
