/**
 * 贪心
 */
var minDominoRotations = function (A, B) {
  const n = A.length
  let candidates = [A[0], B[0]] // 候选值
  for (let i = 1; i < n; ++i) {
    candidates = candidates.filter(item => item === A[i] || item === B[i]) // 不断筛选候选值
    if (!candidates.length) return -1
  }

  const target = candidates[0] // 如果有多(2)个候选值，取第一个就行
  let [a, b] = [0, 0]
  for (let i = 0; i < n; ++i) {
    if (A[i] === target) ++a
    if (B[i] === target) ++b
  }
  return Math.min(a, n - a, b, n - b)
};

[
  [[2,1,2,4,2,2], [5,2,6,2,3,2]],
  [[3,5,1,2,3], [3,6,3,3,4]],
  [[1,2,1,1,1,2,2,2], [2,1,2,2,2,2,2,2]],
].forEach(input => {
  console.log(minDominoRotations(...input))
})