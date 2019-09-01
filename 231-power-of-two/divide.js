/**
 * 除法：判断是否一直能被2整除
 * O(logN)，耗时92ms
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false
  if (n === 1) return true

  while (n > 1) {
    if (n % 2 !== 0) { // 如果中途不能被2整除，则返回false
      return false
    }
    n /= 2
  }
  return true
};
