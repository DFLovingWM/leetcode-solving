/**
 * 哈希表计数
 */

const M = 9

var numEquivDominoPairs = function (dominoes) {
  const count = Array.from({ length: M + 1 }, () => Array.from({ length: M + 1 }, () => 0))
  for (const domino of dominoes) {
    const a = Math.min(...domino)
    const b = Math.max(...domino)
    ++count[a][b]
  }

  let res = 0
  for (let i = 1; i <= M; ++i) {
    for (let j = i; j <= M; ++j) {
      res += count[i][j] * (count[i][j] - 1) / 2
    }
  }
  return res
};

[
  [[1,2],[2,1],[3,4],[5,6]],
].forEach(arr => {
  console.log(numEquivDominoPairs(arr))
})