/**
 * 朴素
 */
var xorOperation = function(n, start) {
  let res = 0; // XOR的初始值是0（不是1）
  for (let i = 0; i < n; ++i) {
    const num = start + 2 * i;
    res ^= num;
  }
  return res;
};