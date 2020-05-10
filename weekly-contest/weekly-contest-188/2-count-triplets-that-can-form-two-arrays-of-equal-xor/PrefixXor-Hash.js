/**
 * 前缀XOR + 哈希
 * 
 * 时间：O(N^2), 60ms
 */
var countTriplets = function(arr) {
  const n = arr.length;
  const getIndex = new Map(); // 数字 => 下标数组
  getIndex.set(0, [0]);

  let res = 0;
  let prefix = 0; // 前缀XOR值

  for (let i = 1; i <= n; ++i) {
    prefix ^= arr[i - 1];
    for (const j of (getIndex.get(prefix) || [])) {
      res += i - j - 1;
    }
    if (!getIndex.has(prefix)) getIndex.set(prefix, []);
    getIndex.get(prefix).push(i);
  }

  return res;
};

module.exports = countTriplets;