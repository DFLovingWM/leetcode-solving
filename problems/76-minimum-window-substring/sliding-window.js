/**
 * 滑动窗口 + HashMap
 * 时间：O(N), 152ms
 */
var minWindow = function(s, t) {
  const need = new Map()
  for (const ch of t) need.set(ch, (need.get(ch) || 0) + 1)
  const needMatch = Array.from(need.keys()).length

  let [left, right] = [0, -1]
  const curr = new Map
  let res = '', minLength = Infinity
  let match = 0

  // 探索可行解：通过增加right
  while (right < s.length) {
    const newChar = s[++right]
    if (need.has(newChar)) { // 只在乎需要的字符
      curr.set(newChar, (curr.get(newChar) || 0) + 1)
      if (curr.get(newChar) === need.get(newChar)) { // 某个字符的次数刚刚满足，则匹配数+1
        ++match
      }
    }

    // 优化可行解：能满足的情况下，用left缩小范围
    while (match === needMatch && left <= right) {
      // 更新答案
      if (right - left + 1 < minLength) {
        minLength = right + 1 - left
        res = s.slice(left, right + 1)
      }

      const oldChar = s[left++]
      if (need.has(oldChar)) {
        curr.set(oldChar, curr.get(oldChar) - 1)
        if (curr.get(oldChar) + 1 === need.get(oldChar)) { // 某个字符的次数少于标准，则匹配数-1
          --match
        }
      }
    }
  }

  return res
};

[
  ["ab", "a"],
  ['ADOBECODEBANC', 'ABC'],
  ['aaaaa', 'aaa']
].forEach(input => {
  console.log(minWindow(...input))
})