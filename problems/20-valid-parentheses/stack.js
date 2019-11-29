/**
 * 栈
 * 
 * 时间：`O(N)`, 52ms
 */

const MAPPING = new Map([
  ['(', ')'],
  ['{', '}'],
  ['[', ']']
])

var isValid = function (S) {
  if (S.length & 1) return false // 奇数长度 => 不合法

  const stack = []

  for (const ch of S) {
    if (MAPPING.has(ch)) {
      stack.push(ch)
      if (stack.length > S.length / 2) return false // 左括号超过一半 => 不合法
    } else if (stack.length === 0 || MAPPING.get(stack[stack.length - 1]) !== ch) {
      return false
    } else {
      stack.pop()
    }
  }

  return stack.length === 0
};

module.exports = isValid