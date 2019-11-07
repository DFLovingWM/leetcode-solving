/**
 * 手动处理
 * 
 * 时间：O(N), 68ms
 */
var reverseWords = function (S) {
  // 排除前后空格
  let start = 0
  while (start < S.length && S[start] === ' ') ++start
  let end = S.length - 1
  while (end >= 0 && S[end] === ' ') --end
  
  // 采集单词到数组中
  const words = []
  let word = ''
  for (let i = start; i <= end; ++i) {
    if (S[i] === ' ') {
      if (word) {
        words.push(word)
        word = ''
      }
    } else {
      word += S[i]
    }
  }
  if (word) {
    words.push(word)
    word = ''
  }

  // 反转数组
  let l = 0, r = words.length - 1
  while (l < r) {
    [words[l], words[r]] = [words[r], words[l]]
    ++l
    --r
  }
  
  // 化为字符串
  let res = ''
  for (const word of words) {
    if (res) res += ' '
    res += word
  }
  return res
};

module.exports = reverseWords