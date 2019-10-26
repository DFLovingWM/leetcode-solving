/**
 * 不断除以2、3、5，看最后是否回到1
 * 
 * 时间：O(logN), 72ms
 * 空间：O(1)
 */
var isUgly = function (n) {
  if (n === 0) return false

  for (const i of [2, 3, 5]) {
    while (n % i === 0) {
      n /= i
    }
  }
  return n === 1
};

module.exports = isUgly