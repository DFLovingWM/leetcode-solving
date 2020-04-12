/**
 * 暴力：维护数组
 * 
 * 时间：O(QM)
 */
var processQueries = function(queries, m) {
  const arr = Array.from({ length: m }, (_, i) => i + 1);
  const res = [];
  for (const q of queries) {
    const i = arr.indexOf(q);
    res.push(i);
    // 移动
    arr.splice(i, 1);
    arr.unshift(q);
  }
  return res;
};

[
  [[3,1,2,1], 5],
  [[4,1,2,2], 4],
  [[7,5,5,8,3], 8],
].forEach(A=> {
  console.log(processQueries(...A))
})