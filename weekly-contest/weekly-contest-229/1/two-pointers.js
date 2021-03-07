/**
 * 双指针
 */
var mergeAlternately = function(A, B) {
  let [i, j] = [0, 0];
  let res = '';
  for (; i < A.length && j < B.length; ++i, ++j) {
    res += A[i] + B[j];
  }
  res += A.slice(i) + B.slice(j);
  return res;
};