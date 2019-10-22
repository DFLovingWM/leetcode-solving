/**
 * 选定一个点作为pivot，判断斜率K
 */
var checkStraightLine = function (coordinates) {
  const k = getK(...coordinates[1], ...coordinates[0])

  for (let i = 2; i < coordinates.length; ++i) {
    if (getK(...coordinates[i], ...coordinates[0]) !== k) {
      return false
    }
  }
  return true
};

function getK (x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1)
}

[
  [[0,0], [1,0]],
  [[0,0], [0,1]], //
  [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]],
  [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]],
].forEach(arr => {
  console.log(checkStraightLine(arr))
})
