/**
 * 前缀XOR
 * 
 * 时间：O(N^3), 100ms
 */
var countTriplets = function(arr) {
  const n = arr.length;
  const prefix = Array.from({ length: n + 1 }, () => 0);
  for (let i = 1; i <= n; ++i) {
    prefix[i] = prefix[i - 1] ^ arr[i - 1];
  }
  // 遍历三元组
  let res = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      for (let k = j; k < n; ++k) {
        const a = prefix[j] ^ prefix[i]; // i ~ (j-1)
        const b = prefix[k + 1] ^ prefix[j]; // j ~ k
        if (a === b) {
          ++res;
        }
      }
    }
  }
  return res;
};

module.exports = countTriplets;