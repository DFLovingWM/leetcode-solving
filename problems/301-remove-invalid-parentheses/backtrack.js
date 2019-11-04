/**
 * 回溯：从空串开始，每次增加一个括号（同时保证left >= right）
 * 
 * 时间：`O(2^N)`, 144ms
 */
var removeInvalidParentheses = function (S) {
  let res = []

  function backtrack (i, acc, left, right) {
    if (i === S.length) {
      if (left === right) {
        res.push(acc)
      }
      return
    }

    // 有策略地选取，也算是一种优化（不必在最终判断）
    if (S[i] === '(') {
      backtrack(i + 1, acc, left, right) // 不选
      backtrack(i + 1, acc + '(', left + 1, right) // 选
    } else if (S[i] === ')') {
      backtrack(i + 1, acc, left, right) // 不选
      if (right < left) {
        backtrack(i + 1, acc + ')', left, right + 1) // 选
      }
    } else {
      backtrack(i + 1, acc + S[i], left, right) // 选
    }
  }

  // 穷举
  backtrack(0, '', 0, 0)
  // 筛选最大长度
  const maxLen = res.reduce((acc, item) => Math.max(acc, item.length), 0)
  res = res.filter(item => item.length === maxLen)
  // 去重
  res = Array.from(new Set(res))

  return res.length === 0 ? [''] : res
};

module.exports = removeInvalidParentheses