/**
 * 水题
 */
var fixedPoint = function (A) {
  for (let i = 0; i < A.length; ++i) {
    if (i === A[i]) {
      return i
    }
  }
  return -1
};