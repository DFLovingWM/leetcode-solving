/**
 * 滑动窗口(大小固定)
 * 
 * 时间：`O(N)`, 80ms
 */
var numKLenSubstrNoRepeats = function (S, K) {
  if (K > Math.max(26, S.length)) { // 如果K大于26，或者K大于S长度 => 不存在这样的子串
    return 0
  }

  const freq = new Map()
  let unmatch = 0
  let res = 0

  for (let i = 0; i < S.length; ++i) {
    // 增加一个字符
    const newChar = S[i]
    freq.set(newChar, (freq.get(newChar) || 0) + 1)
    if (freq.get(newChar) === 2) ++unmatch

    // 减少一个字符
    if (i >= K) {
      const oldChar = S[i - K]
      freq.set(oldChar, (freq.get(oldChar) || 0) - 1)
      if (freq.get(oldChar) === 1) --unmatch
    }

    if (i >= K - 1 && unmatch === 0) ++res
  }

  return res
};

[
  ['havefunonleetcode', 5],
  ['home', 5],
].forEach(input => {
  console.log(numKLenSubstrNoRepeats(...input))
})