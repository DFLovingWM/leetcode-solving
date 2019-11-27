/**
 * 栈：类似于计算器
 * 
 * 时间：`O(N)`, 56ms
 */
var scoreOfParentheses = function (text) {
  const stack = []

  // 遍历
  for (const ch of text) {
    if (ch === '(') {
      stack.push(ch)
    } else {
      let tmp = 0
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        tmp += stack.pop()
      }
      stack.pop()
      stack.push(tmp * 2 || 1) // 压栈，待用
    }
  }

  // 栈中剩余元素，求和
  return stack.reduce((a, b) => a + b, 0)
};

module.exports = scoreOfParentheses