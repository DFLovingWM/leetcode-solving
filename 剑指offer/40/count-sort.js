/**
 * 计数排序
 * 
 * 时间：O(N), 124ms
 * 空间：O(R) <= O(1000), 40MB
 */
var getLeastNumbers = function (arr, k) {
  if (k === 0) return [];

  const max = Math.max(...arr);
  const freq = Array.from({ length: max + 1 }, () => 0);
  for (const n of arr) {
    ++freq[n];
  }

  const res = [];
  for (let n = 0; n <= max; ++n) {
    for (let i = 0; i < freq[n]; ++i) {
      res.push(n);
      if (res.length === k) return res;
    }
  }
};