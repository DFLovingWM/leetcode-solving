/**
 * 分治：如果某个字符的频次少于K，则它不可能出现在目标串中，于是将其作为分隔符，分割为N个子串（子问题）
 * 
 * 时间：72ms
 */
var longestSubstring = function (text, K) {
  // 计算字符频次
  const count = new Map()
  for (const ch of text) {
    count.set(ch, (count.get(ch) || 0) + 1)
  }

  // 挑出1个不满足的字符
  let char = null
  for (const [ch, cnt] of count) {
    if (cnt < K) {
      char = ch
      break
    }
  }

  // 递归终止条件：
  // 如果字符频次都在K以上，那么该子串合法，直接返回
  if (char === null) return text.length

  let res = 0
  for (const subText of text.split(char)) {
    res = Math.max(res, longestSubstring(subText, K))
  }
  return res
};

[
  ['aaabb', 3],
  ['ababbc', 2],
].forEach(input => {
  console.log(longestSubstring(...input))
})