/**
 * 回溯
 */
var generateParenthesis = function(n) {
  const res = [];

  function backtrack(s, left, right) {
    if (left === n && right === n) {
      res.push(s);
      return;
    }

    // 1. 添加'('的条件：添加后'('总数不能超过n
    if (left + 1 <= n) {
      backtrack(s + '(', left + 1, right);
    }

    // 2. 添加')'的条件：添加后')'不能比'('多
    if (right + 1 <= left) {
      backtrack(s + ')', left, right + 1);
    }
  }

  backtrack('', 0, 0);
  return res;
};