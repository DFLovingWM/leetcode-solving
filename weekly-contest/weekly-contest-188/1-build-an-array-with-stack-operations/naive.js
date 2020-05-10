/**
 * 模拟
 */
var buildArray = function(target, n) {
  const res = [];
  const s = new Set(target);
  const limit = Math.min(Math.max(...target), n);
  for (let i = 1; i <= limit; ++i) {
    res.push('Push');
    if (!s.has(i)) {
      res.push('Pop');
    }
  }
  return res;
};

[
  [[1,3], 3],
  [[1,2,3], 3],
  [[1,2], 4],
  [[2,3,4], 4],
].forEach(A=> {
  console.log(buildArray(...A))
})