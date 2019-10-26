/**
 * HashMap：先扫一遍数频次，再扫一遍找出第一个次数为1的数字
 * 
 * 时间：O(N), 116ms
 * 空间：O(N)
 */
var firstUniqChar = function (s) {
  const count = new Map()
  for (const ch of s) {
    count.set(ch, (count.get(ch) || 0) + 1)
  }

  for (let i = 0; i < s.length; ++i) {
    if (count.get(s[i]) === 1) return i
  }
  return -1
};