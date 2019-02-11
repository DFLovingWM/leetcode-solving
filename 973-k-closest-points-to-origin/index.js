/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  points.sort((p1, p2) => getDistance(p1) - getDistance(p2))
  return points.slice(0, K)
}

function getDistance ([x, y]) {
  return x * x + y * y
}
