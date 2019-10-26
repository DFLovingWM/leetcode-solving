/**
 * 子串问题：滑动窗口
 * 
 * 时间：64ms
 * 空间：36.1MB
 */
var equalSubstring = function (s, t, maxCost) {
  let [left, right] = [0, 0]
  let res = 0 // 子串最长长度

  while (right < s.length) {
    maxCost -= getCost(s[right], t[right])
    ++right

    if (maxCost >= 0) {
      // 顶得住，才更新答案
      res = Math.max(res, right - left)
    }

    while (maxCost< 0 && left <= right) {
      maxCost += getCost(s[left], t[left])
      ++left
    }
  }

  return res
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