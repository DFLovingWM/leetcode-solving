/**
 * 滑动窗口
 * 
 * 时间：O(N), 72ms
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let [L, R] = [0, 0]
  const countMap = new Map()
  let charCount = 0
  let res = 0

  while (R < s.length) {
    const newChar = s[R++]
    countMap.set(newChar, (countMap.get(newChar) || 0) + 1)
    if (countMap.get(newChar) === 1) ++charCount
    if (charCount <= k) res = Math.max(res, R - L)
    
    while (charCount > k) {
      const oldChar = s[L++]
      countMap.set(oldChar, countMap.get(oldChar) - 1)
      if (countMap.get(oldChar) === 0) --charCount
    }
  }

  return res
};

[
  ['eceba', 2],
  ['aa', 1],
].forEach(input => {
  console.log(lengthOfLongestSubstringKDistinct(...input))
})