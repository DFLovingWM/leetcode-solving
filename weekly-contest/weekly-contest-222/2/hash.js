/**
 * 两数之和，用哈希
 */
var countPairs = function(arr) {
  const freq = new Map();
  const mod = 1e9 + 7;

  const sums = [];
  for (let i = 0; i <= 21; ++i) {
    sums.push(1 << i);
  }

  let res = 0;
  for (const num of arr) { // N
    for (const sum of sums) { // 常数
      if (freq.has(sum - num)) {
        res += freq.get(sum - num);
        res %= mod;
      }
    }
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return res;
};
