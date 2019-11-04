/**
 * 以左右括号数量，记录当前有效的括号下标
 * 时间：`O(N)`, 132ms
 */
var minRemoveToMakeValid = function (S) {
  let left = []
  let right = []

  // 先贪心拿：左括号多于等于右括号
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === '(') {
      left.push(i)
    } else if (S[i] === ')' && left.length > right.length) {
      right.push(i)
    }
  }

  // 从后面删除多余的左括号
  while (left.length > right.length) {
    left.pop()
  }

  const i2p = new Map()
  for (let i = 0; i < left.length; ++i) {
    i2p.set(left[i], '(')
  }
  for (let i = 0; i < right.length; ++i) {
    i2p.set(right[i], ')')
  }

  let res = ''
  for (let i = 0; i < S.length; ++i) {
    if (i2p.has(i)) {
      res += i2p.get(i)
    } else if (S[i] !== '(' && S[i] !== ')') {
      res += S[i]
    }
  }

  return res
};

module.exports = minRemoveToMakeValid