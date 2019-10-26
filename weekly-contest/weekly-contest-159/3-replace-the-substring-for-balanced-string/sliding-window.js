/**
 * 滑动窗口：窗口用以减小字符频次，求使剩余字符串频次合法的最小窗口
 * 
 * 时间：O(N), 348ms
 */
var balancedString = function (s) {
  const count = new Map()
  for (const ch of s) {
    count.set(ch, (count.get(ch) || 0) + 1)
  }
  
  let limit = s.length / 4 // 每种字符最多出现limit次
  let [left, right] = [0, 0]
  let res = s.length

  while (right < s.length) {
    const deleteChar = s[right++]
    count.set(deleteChar, count.get(deleteChar) - 1)

    while (left <= right && isValid(count, limit)) { // 合法，则尝试缩小窗口
      res = Math.min(res, right - left)
      const releaseChar = s[left++]
      count.set(releaseChar, (count.get(releaseChar) || 0) + 1)
    }
  }
  
  return res
};

function isValid (count, limit) {
  return Array.from(count.values()).every(cnt => cnt <= limit)
}

[
  'QWER',
  'QQWE',
  'QQQW',
  'QQQQ',
].forEach(s => {
  console.log(balancedString(s))
})