/**
 * Map的O(N)解法，参考：
 * https://mp.weixin.qq.com/s/8JRBQU9_aBHPPTennxsQBQ
 */
var canConvert = function(str1, str2) {
  const mapping = new Map()

  // Special case
  if (str1 === str2) return true

  for (let i = 0; i < str1.length; ++i) {
    let [a, b] = [str1[i], str2[i]]
    if (!mapping.has(a)) {
      mapping.set(a, b)
    } else {
      if (mapping.get(a) !== b) { // 表示同1个字母想要转成N个字母，直接失败
        return false
      }
    }
  }

  return Array.from(mapping.keys()).length < 26 // 看是否用完了所有字母
};

[
  ['aabcc', 'ccdee'],
  ['leetcode', 'codeleet'],
  ['a', 'a'],
  ['aa', 'aa'],
  ['abbb', 'cbbb'],
  ["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"],
].forEach(input => {
  console.log(canConvert(...input))
})
