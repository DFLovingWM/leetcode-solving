/**
 * 排序
 * 
 * 时间：`O(N)`, 208ms
 */
var repeatedNTimes = function (A) {
  A = countSort(A);
  for (let i = 1; i < A.length; ++i) {
    if (A[i] === A[i - 1]) {
      return A[i]
    }
  }
};

// 计数排序：O(N)
function countSort(arr) {
  const freq = Array.from({ length: 10000 }, () => 0);
  for (const n of arr) {
    ++freq[n];
  }

  const res = [];
  for (let i = 0; i < 10000; ++i) {
    for (let k = freq[i] - 1; k >= 0; --k) {
      res.push(i);
    }
  }
  return res;
}