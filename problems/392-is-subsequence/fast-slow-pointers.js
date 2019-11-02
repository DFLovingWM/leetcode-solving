/**
 * 逐一查找/排除pattern中的字符
 * 
 * 时间：`O(N)`, 92ms
 */
var isSubsequence = function(pattern, text) {
  let j = 0
  for (let i = 0; i < text.length; ++i) {
    if (text[i] === pattern[j]) {
      ++j
      if (j === pattern.length) return true // 提前找完
    }
  }
  return j === pattern.length
};

module.exports = isSubsequence