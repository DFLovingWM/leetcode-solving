/**
 * 前缀和 + 区间交集
 * 时间：O(N), 272ms
 */
var canEat = function(candiesCount, queries) {
  const p = [0];
  for (const n of candiesCount) {
    p.push(p[p.length - 1] + n);
  }

  const res = [];
  for (const [type, day, cap] of queries) {
    const expected = [p[type] + 1, p[type + 1]];
    const actual = [1 * (day + 1), cap * (day + 1)];
    res.push(overlap(expected, actual));
  }

  return res;
};

function overlap(A, B) {
  return !(A[1] < B[0] || B[1] < A[0]);
}

module.exports = canEat;
