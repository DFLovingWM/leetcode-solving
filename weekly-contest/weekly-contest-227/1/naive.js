/**
 * 山峰
 */
var check = function(A) {
  const n = A.length;
  let i = 0;
  while (i + 1 < n && A[i + 1] >= A[i]) {
    ++i;
  }
  if (i === n - 1) { // 整个非递减
    return true;
  }

  ++i;
  while (i + 1 < n && A[i + 1] >= A[i]) {
    ++i;
  }

  // 两段非递减
  // 并且，tail不比head大
  return i === n - 1 && A[0] >= A[n - 1];
};