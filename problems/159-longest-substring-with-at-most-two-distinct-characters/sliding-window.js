/**
 * 滑动窗口 + HashMap
 * 时间：O(N), 76ms
 */
var lengthOfLongestSubstringTwoDistinct = function(string) {
  const count = new Map()
  let match = 0
  let [L, R] = [0, -1]
  let res = 0

  while (R < string.length) {
    const newChar = string[++R]
    count.set(newChar, (count.get(newChar) || 0) + 1)
    if (count.get(newChar) === 1) {
      // 新字符，+1
      ++match
    }
    res = Math.max(res, R - L)

    while (match > 2 && L <= R) {
      const oldChar = string[L++]
      count.set(oldChar, count.get(oldChar) - 1)
      if (count.get(oldChar) === 0) {
        // 字符数变为0，则删除，-1
        --match
      }
    }
  }

  return res
};

[
  'eceba',
  // 'ccaabbb',
].forEach(s => {
  console.log(lengthOfLongestSubstringTwoDistinct(s))
})