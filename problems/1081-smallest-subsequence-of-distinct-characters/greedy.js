/**
 * 贪心解法
 * 时间：`O(N)`, ms
 * 
 * 参考：[没有奇技淫巧，只有纯粹的贪心思想](https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/solution/mei-you-qi-ji-yin-qiao-zhi-you-chun-cui-de-tan-xin/)
 */
var smallestSubsequence = function (text) {
  const candidates = Array.from(new Set(Array.from(text))).sort()
  const keep = new Set() // 保留的字符（使用Set是为了快速查询某个字符是否存在）
  const future = count(text) // 未遍历的字符（使用Map是为了快速查询某个字符是否存在）
  let res = Array.from({ length: candidates.length }, () => '')

  for (let i = 0; i < res.length; ++i) {
    for (const ch of candidates) {
      if (keep.has(ch)) continue // 已经有该字符了，跳过
      
    }
  }

  return res.join('')
};

function count (word) {
  const res = new Map()
  for (const ch of word) {
    res.set(ch, (res.get(ch) || 0) + 1)
  }
  return res
}

module.exports = smallestSubsequence