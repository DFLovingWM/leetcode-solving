/**
 * 常用位操作：数1的个数
 * 
 * 时间：O(logN)
 */
var hammingWeight = function (n) {
  let res = 0;
  for (; n; n >>>= 1) {
    if (n & 1) ++res;
  }
  return res;
};