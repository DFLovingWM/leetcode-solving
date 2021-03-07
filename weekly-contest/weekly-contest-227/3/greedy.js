/**
 * 贪心
 * 时间：O(N^2)
 */
var largestMerge = function(A, B) {
  let res = '';
  let [i, j] = [0, 0];
  while (i < A.length || j < B.length) {
    const a = A.slice(i);
    const b = B.slice(j);
    if (a >= b) {
      res += A[i++];
    } else {
      res += B[j++];
    }
  }
  return res;
};