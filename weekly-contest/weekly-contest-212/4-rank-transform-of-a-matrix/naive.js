/**
 * 贪心：从小到大算rank
 */
var matrixRankTransform = function(mat) {
  const [m, n] = [mat.length, mat[0].length];
  const arr = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      arr.push([i, j]);
    }
  }
  arr.sort((A, B) => mat[A[0]][A[1]] - mat[B[0]][B[1]]);

  const res = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  const rowMax = Array.from({ length: m }, () => [-1, 0]); // [col, maxValue]
  const colMax = Array.from({ length: n }, () => [-1, 0]); // [row, maxValue]
  for (const [i, j] of arr) {
    getRank()

    const r = Math.max(rowMax[i], colMax[j]) + 1;
    res[i][j] = rowMax[i] = colMax[j] = r;
  }
  return res;
};

function getRank(prevValue, prevRank, currValue) {
  if (currValue === prevValue) return prevRank;
  return prevRank + 1;
}
