/**
 * 用语言API
 * 
 * 时间：O(N), 64ms
 */
var reverseWords = function (s) {
  return s.trim().split(' ').filter(word => word.length).reverse().join(' ')
};

module.exports = reverseWords