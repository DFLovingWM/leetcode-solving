/**
 * 回溯
 * 
 * 时间：64ms
 */
var generateParenthesis = function (n) {
  const res = []
  backtrack(n * 2, '', 0, 0, res)
  return res
};

// 对于每个位置，至多有'('和')'这2种选择
function backtrack (n, acc, left, right, res) {
  if (acc.length === n) {
    res.push(acc)
    return
  }

  // 左括号：只要不够一半，就能够添加
  if (left < n / 2) {
    backtrack(n, acc + '(', left + 1, right, res)
  }

  // 右括号：只要目前比左括号要少，就能添加
  if (right < left) {
    backtrack(n, acc + ')', left, right + 1, res)
  }
}

module.exports = generateParenthesis