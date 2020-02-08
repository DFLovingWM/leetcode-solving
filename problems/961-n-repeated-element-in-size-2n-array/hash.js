/**
 * 哈希
 * 
 * 时间：`O(N)`, 76ms
 */
var repeatedNTimes = function (A) {
  const exist = new Set();
  for (const n of A) {
    if (exist.has(n)) return n;
    exist.add(n);
  }
};