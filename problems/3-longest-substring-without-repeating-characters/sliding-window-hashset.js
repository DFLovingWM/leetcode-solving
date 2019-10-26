/**
 * 滑动窗口 + HashSet
 * 时间：O(2N)=O(N)，128ms
 */
var lengthOfLongestSubstring = function(string) {
  const chars = new Set() // 记录窗口中的字符集
  let L = 0, R = 0, res = 0
  
  while (R < string.length) {
    const newChar = string[R]

    if (!chars.has(newChar)) { // 没有重复字符
      chars.add(newChar)
      ++R
      res = Math.max(res, R - L) // 更新答案
    } else { // 检测到重复字符
      // 删除元素直到该字符
      chars.delete(string[L])
      ++L
    }
  }

  return res
};

module.exports = lengthOfLongestSubstring