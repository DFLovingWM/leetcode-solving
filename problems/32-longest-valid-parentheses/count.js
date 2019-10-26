/**
 * 扫描两遍：顺序、逆序，并计算数量
 * 
 * 时间：O(N), 84ms
 * 空间：O(1)
 */
var longestValidParentheses = function (S) {
  let left, right, res = 0

  // 顺序扫描
  left = right = 0
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === '(') {
      ++left
    } else {
      ++right
    }
    if (right > left) {
      // 当前字符串已经不合法了
      // 从这里开始，重新计数
      left = right = 0
    } else if (right === left) {
      // 相等时，表明当前字符串合法，更新长度
      res = Math.max(res, 2 * right)
    }
  }

  // 逆序扫描（同理）
  left = right = 0
  for (let i = S.length - 1; i >= 0; --i) {
    if (S[i] === '(') {
      ++left
    } else {
      ++right
    }
    if (left > right) {
      left = right = 0
    } else if (right === left) {
      res = Math.max(res, 2 * left)
    }
  }

  return res
};

module.exports = longestValidParentheses