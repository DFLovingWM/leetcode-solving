/**
 * stack
 * 
 * 时间：`O(N)`, 140ms
 */
var minRemoveToMakeValid = function (S) {
  const stack = []
  const valid = new Set()

  for (let i = 0; i < S.length; ++i) {
    if (S[i] === '(') {
      stack.push(i)
    } else if (S[i] === ')') { // 尽量多一些匹配
      if (stack.length > 0 && S[stack[stack.length - 1]] === '(') { // 能匹配，即标记这两个合法
        valid.add(i)
        valid.add(stack[stack.length - 1])
        stack.pop()
      }
    }
  }

  let res = ''
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === '(' || S[i] === ')') {
      if (valid.has(i)) {
        res += S[i]
      }
    } else {
      res += S[i]
    }
  }
  return res
};

module.exports = minRemoveToMakeValid