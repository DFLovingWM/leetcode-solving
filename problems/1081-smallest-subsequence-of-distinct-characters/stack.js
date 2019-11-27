/**
 * 栈解法
 * 时间：`O(N)`, 68ms
 * 
 * 参考：[栈、位掩码（Python 代码、Java 代码）](https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/solution/tan-xin-suan-fa-zhan-wei-yan-ma-python-dai-ma-java/)
 */
var smallestSubsequence = function (text) {
  const stack = []
  const keep = new Set() // 保留的字符（使用Set是为了快速查询某个字符是否存在）
  const future = count(text) // 未遍历的字符（使用Map是为了快速查询某个字符是否存在）

  for (const ch of text) {
    future.set(ch, future.get(ch) - 1)
    if (keep.has(ch)) continue // 已经存在该字符了，跳过

    while (stack.length > 0 && ch < stack[stack.length - 1]) { // 比栈顶更小
      // 看看后面是否还有栈顶字符，有则pop，没有则保留
      const top = stack[stack.length - 1]
      if (future.get(top)) {
        stack.pop()
        keep.delete(top)
      } else {
        break
      }
    }

    stack.push(ch)
    keep.add(ch)
  }

  return stack.join('')
};

function count (word) {
  const res = new Map()
  for (const ch of word) {
    res.set(ch, (res.get(ch) || 0) + 1)
  }
  return res
}

module.exports = smallestSubsequence