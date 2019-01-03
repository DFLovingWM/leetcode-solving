/**
 * 暴力法[1020ms]：双指针截取子串，判断回文，同时记录最长的回文子串
 * 时间复杂度：O(N3)
 */
function longestPalindrome (str) {
  let result = ''
  for (let i = 0; i < str.length; ++i) {
    for (let j = str.length - 1; j >= i; --j) {
      const substr = str.slice(i, j + 1)
      if (substr.length < result.length) break
      if (isPalindromic(substr) && substr.length > result.length) {
        result = substr
      }
    }
  }
  return result
}

function isPalindromic (string) {
  const limit = Math.floor((string.length + 1) / 2) - 1
  for (let i = 0; i <= limit; ++i) {
    if (string[i] !== string[string.length - i - 1]) {
      return false
    }
  }
  return true
}

module.exports = longestPalindrome