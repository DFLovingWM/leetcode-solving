/**
 * 暴力必定超时，用数学：分配律
 * 
 * 时间：O(N + M)
 */
var getXORSum = function(A, B) {
  const aSum = A.reduce((acc, e) => acc ^ e, 0);
  const bSum = B.reduce((acc, e) => acc ^ e, 0);
  return aSum & bSum;
};