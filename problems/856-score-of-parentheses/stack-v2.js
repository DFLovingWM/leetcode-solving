/**
 * 栈，使用dummy元素，保证每一“层”只有一个数字
 * 
 * 时间：`O(N)`, 72ms
 */
var scoreOfParentheses = function (S) {
  const stack = [0]
  
  for (const ch of S) {
    if (ch === '(') { // 进入下一层后，添加元素0
      stack.push(0)
    } else { // 返回上一层前，求值
      const curr = stack.pop()
      const prev = stack.pop()
      stack.push(prev + Math.max(curr * 2, 1))
    }
  }

  return stack[0]
};

module.exports = scoreOfParentheses