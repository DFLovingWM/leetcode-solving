/**
 * 不断除以2、3、5，看最后是否回到1
 * 
 * 时间：O(logN), 72ms
 * 空间：O(1)
 */
var isUgly = function (n) {
  let prev = n
  let curr = n
  while (true) {
    if (curr % 2 === 0) curr /= 2
    if (curr % 3 === 0) curr /= 3
    if (curr % 5 === 0) curr /= 5
    if (curr === prev) break
    prev = curr
  }
  return curr === 1
};

module.exports = isUgly