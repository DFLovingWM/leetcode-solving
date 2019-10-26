/**
 * HashMap + 滑动窗口（大小恒等于pattern的长度）
 * 时间：O(N), 160ms
 */
var findAnagrams = function(string, pattern) {
  const need = new Map()
  for (const ch of pattern) need.set(ch, (need.get(ch) || 0) + 1)
  const needMatch = Array.from(need.keys()).length

  const curr = new Map()
  let match = 0
  const starts = []

  for (let i = 0; i < string.length; ++i) {
    // 删掉头字符
    if (i - pattern.length >= 0) {
      const oldChar = string[i - pattern.length]
      if (need.has(oldChar)) {
        curr.set(oldChar, curr.get(oldChar) - 1)
        if (curr.get(oldChar) + 1 === need.get(oldChar)) --match
      }
    }

    // 增加新字符到结尾
    const newChar = string[i]
    if (need.has(newChar)) {
      curr.set(newChar, (curr.get(newChar) || 0) + 1)
      if (curr.get(newChar) === need.get(newChar)) ++match
    }

    // 更新答案
    if (match === needMatch) {
      starts.push(i - pattern.length + 1)
    }
  }

  return starts
};

[
  ['cbaebabacd', 'abc'],
  ['abab', 'ab'],
].forEach(input => {
  console.log(findAnagrams(...input))
})