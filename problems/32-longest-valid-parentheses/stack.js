/**
 * 栈
 * 
 * 时间：O(N), 84ms
 */
var longestValidParentheses = function(s) {
  const stack = [-1];
  let res = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length === 0 || s[stack[stack.length - 1]] !== '(') { // 不合法
        stack.push(i);
      } else { // 合法
        stack.pop();
        res = Math.max(res, i - stack[stack.length - 1]);
      }
    }
  }
  return res;
};

module.exports = longestValidParentheses;
