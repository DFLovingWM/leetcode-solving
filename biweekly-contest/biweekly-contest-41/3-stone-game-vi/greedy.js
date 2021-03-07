/**
 * 排序/贪心
 * 
 * 时间：O(NlogN), 368ms
 */
var stoneGameVI = function(a, b) {
  const n = a.length;
  const arr = [];
  for (let i = 0; i < n; ++i) {
    arr.push([a[i], b[i]]);
  }
  // (A[i] + B[i])更大的优先
  arr.sort((A, B) => (
    (B[0] + B[1]) - (A[0] + A[1])
  ));
  
  let d = 0;
  for (let i = 0; i < n; ++i) {
    if (i % 2 === 0) { // Alice
      d += arr[i][0];
    } else { // Bob
      d -= arr[i][1];
    }
  }
  return d === 0
    ? 0
    : d / Math.abs(d);
};

[
  [[1,3], [2,1]],
  [[1,2], [3,1]],
  [[2,4,3], [1,6,7]],
].forEach(A => {
  console.log(stoneGameVI(...A))
})