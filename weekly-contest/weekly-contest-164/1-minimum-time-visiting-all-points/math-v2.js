/**
 * 思路相同，但代码更简单
 */
var minTimeToVisitAllPoints = function (points) {
  let res = 0

  for (let i = 1; i < points.length; ++i) {
    const prev = points[i - 1]
    const curr = points[i]

    // 取更大者即可
    res += Math.max(
      Math.abs(prev[0] - curr[0]),
      Math.abs(prev[1] - curr[1])
    )
  }

  return res
};

module.exports = minTimeToVisitAllPoints