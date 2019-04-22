/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let indeg = Array.from({ length: N + 1 }, _ => 0)
  let outdeg = Array.from({ length: N + 1 }, _ => 0)

  for (const [x, y] of trust) {
    ++indeg[y]
    ++outdeg[x]
  }

  // console.log(indeg)
  // console.log(outdeg)

  let target = -1
  for (let i = 1; i <= N; ++i) {
    if (indeg[i] === N - 1 && outdeg[i] === 0) {
      target = i
    }
  }

  return target
};