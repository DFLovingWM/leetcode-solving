/**
 * 更简洁的写法
 * 参考：https://leetcode.com/problems/get-equal-substrings-within-budget/discuss/392837/JavaC%2B%2BPython-Sliding-Window
 * 
 * 时间：O(N), 68ms
 * 空间：O(1), 36MB
 */
var equalSubstring = function (s, t, maxCost) {
  let i = 0
  let j

  for (j = 0; j < s.length; ++j) {
    maxCost -= getCost(s[j], t[j])

    // 超过代价时，本来需要缩小窗口
    // 但因为求的是最长长度，所以可以让窗口大小只增不减
    if (maxCost < 0) {
      maxCost += getCost(s[i], t[i])
      ++i
    }
  }

  // 所以最终窗口的大小肯定是整个过程中最大的
  return j - i
};

// 字符转化代价
function getCost(a, b) {
  return Math.abs(a.charCodeAt(0) - b.charCodeAt(0))
}

[
  ['abcd', 'bcdf', 3],
  ['abcd', 'cdef', 3],
  ['abcd', 'acde', 0],
  ["pxezla", "loewbi", 25]
].forEach(input => {
  console.log(equalSubstring(...input))
})