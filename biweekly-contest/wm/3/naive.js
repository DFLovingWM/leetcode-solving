/**
 * 贪心/栈
 */
var minInsertions = function(s) {
  // 贪心消除
  let stack = ''
  for (const ch of s) {
    stack += ch;
    if (stack.length >= 3 && stack.slice(stack.length - 3) === '())') {
      stack = stack.slice(0, stack.length - 3);
    }
  }
  // 处理剩余的
  const n = stack.length;
  return Math.floor(n / 2) + 2 * (n % 2);
};
