/**
 * 计数即可
 * 
 * 时间：O(N), 44ms
 * 空间：O(1)
 */
var checkRecord = function (s) {
  let a = 0, l = 0

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === 'A') {
      ++a
      if (a > 1) return false // 缺席累计超过1次，则失败
    }

    if (s[i] === 'L') {
      if (i - 1 >= 0 && s[i - 1] === 'L') {
        // 如果是连续，就累加
        ++l
        if (l > 2) return false // 连续迟到超过2次，则失败
      } else {
        l = 1
      }
    } else {
      // 不是连续，则清空L计数
      l = 0
    }
  }

  return true
};

[
  'PPALLP',
  'PPALLL',
].forEach(s => {
  console.log(checkRecord(s))
})