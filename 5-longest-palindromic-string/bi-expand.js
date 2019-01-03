/**
 * 双向扩展：从每一个字符(包括空隙字符)出发，两边扩展并同时判断回文
 * 时间复杂度：O(N * N)，耗时[120ms]
 */

/**
 * 写法1
 */
function longestPalindrome (chars) {
  let result = ''

  for (let i = 0; i < chars.length; ++i) {
    // 从单个字符开始
    let delta = 1 // 其实这里可以不从1开始(看result长度)
    while (i - delta >= 0 && i + delta < chars.length && chars[i - delta] === chars[i + delta]) ++delta
    --delta
    let tmpResult = chars.slice(i - delta, i + delta + 1)
    if (tmpResult.length > result.length) result = tmpResult

    // 从双个字符开始
    if (i < chars.length - 1 && chars[i] === chars[i + 1]) {
      delta = 1
      while (i - delta >= 0 && i + 1 + delta < chars.length && chars[i - delta] === chars[i + 1 + delta]) ++delta
      --delta
      tmpResult = chars.slice(i - delta, i + 1 + delta + 1)
      if (tmpResult.length > result.length) result = tmpResult
    }
  }

  return result
}

/**
 * 写法2：更优雅
 */
function longestPalindrome (string) {
  let result = ''

  const expandFrom = (L, R) => {
    while (L >= 0 && R < string.length && string[L] === string[R]) {
      --L
      ++R
    }
    ++L
    --R
    // 跟当前结果相比
    if (R - L + 1 > result.length) {
      result = string.slice(L, R + 1)
    }
  }

  for (let i = 0; i < string.length; ++i) {
    expandFrom(i, i)
    expandFrom(i, i + 1)
  }

  return result
}

module.exports = longestPalindrome