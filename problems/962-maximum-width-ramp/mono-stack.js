/**
 * 单调栈
 * 
 * 时间：`O(N)`, 100ms
 */
var maxWidthRamp = function (A) {
  // 构造单调递减栈
  const stack = []
  for (const [i, n] of A.entries()) {
    if (stack.length === 0 || n < A[stack[stack.length - 1]]) {
      stack.push(i)
    }
  }

  // 逆序遍历
  let res = 0
  for (let j = A.length - 1; j >= 0; --j) {
    while (stack.length > 0 && A[j] >= A[stack[stack.length - 1]]) {
      res = Math.max(res, j - stack[stack.length - 1])
      stack.pop()
    }
  }

  return res
};

module.exports = maxWidthRamp