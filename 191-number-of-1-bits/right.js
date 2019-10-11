/**
 * 无符号右移
 */
var hammingWeight = function (n) {
  let count = 0
  while (n) {
    count += n & 1
    n = n >>> 1 // 无符号右移
  }
  return count
};

module.exports = hammingWeight