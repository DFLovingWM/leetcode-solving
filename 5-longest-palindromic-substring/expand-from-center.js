/**
 * 对于每个中心，向两边扩展
 * 时间：O(N^2), 84ms
 */
function longestPalindrome (text) {
  let res = ''

  for (let i = 0; i < text.length; ++i) {
    const s1 = getString(text, i, i) // 奇数串，中心是字符
    if (s1.length > res.length) res = s1

    if (i < text.length - 1) {
      const s2 = getString(text, i, i + 1) // 偶数串，中心是空隙
      if (s2.length > res.length) res = s2
    }
  }

  return res
}

function getString (text, L, R) {
  while (L >= 0 && R < text.length && text[L] === text[R]) { // 向两边扩展
    --L
    ++R
  }
  // 最终因不满足退出循环，所以这里要缩小
  ++L
  --R
  return text.slice(L, R + 1)
}

module.exports = longestPalindrome