/**
 * 排序
 * 
 * 时间：O(NlogN), 404ms
 */
var checkIfCanBreak = function(A, B) {
  A = sortStr(A);
  B = sortStr(B);
  return canBreak(A, B) || canBreak(B, A);
};

function sortStr(s) {
  return Array.from(s).sort().join('');
}

function canBreak(A, B) {
  for (let i = 0; i < A.length; ++i) {
    if (A[i] < B[i]) return false;
  }
  return true;
}

module.exports = checkIfCanBreak;