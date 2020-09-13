/**
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
  const arr = s.split('').map(Number);
  const sum = arr.reduce((acc, e) => acc + e, 0);
  const MOD = 1e9 + 7;

  // Edge case 1
  if (sum % 3 !== 0) {
    return 0;
  }

  // Edge case 2
  if (sum === 0) {
    let res = 0;
    for (let i = 1; i + 2 <= arr.length; ++i) {
      res += arr.length - i - 1;
      res %= MOD;
    }
    return res;
  }

  const target = sum / 3;
  let left = 1;
  let right = 1;
  let acc, i;

  // 从左到右
  acc = 0;
  for (i = 0; i < arr.length; ++i) {
    acc += arr[i];
    if (acc === target) break;
  }
  for (i = i + 1; arr[i] === 0; ++i) ++left;

  // 从右到左
  acc = 0;
  for (i = arr.length - 1; i >= 0; --i) {
    acc += arr[i];
    if (acc === target) {
      break;
    }
  }
  for (i = i - 1; arr[i] === 0; --i) ++right;

  return left * right % MOD;
};
