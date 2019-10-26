/**
 * 滑动窗口 + HashMap（存下标）
 * 时间：O(N), 100ms
 */
var lengthOfLongestSubstring = function (string) {
  const pos = new Map() // 记录字符的最新位置
  let L = 0, R = 0
  let res = 0

  while (R < string.length) {
    const newChar = string[R]

    // 发现重复字符ch时，L直接前进到上一个ch之后的位置
    // 注意“重复”的判定条件为：该字符已存在位置、且该位置在当前窗口内
    if (pos.has(newChar) && pos.get(newChar) >= L) {
      L = pos.get(newChar)
    }

    res = Math.max(res, R - L + 1)
    pos.set(newChar, R + 1)
    ++R
  }

  return res
};

module.exports = lengthOfLongestSubstring