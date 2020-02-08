/**
 * 数学（规律）
 * 
 * 时间：O(N), 72ms
 * 空间：O(1), 36.2MB
 */
var repeatedNTimes = function (A) {
  for (let i = 2; i < A.length; ++i) {
    if (A[i] === A[i-2] || A[i] === A[i-1]) {
      return A[i];
    }
  }

  return A[0]; // 来到这里，格式一定如：[x, a, b, x]
};