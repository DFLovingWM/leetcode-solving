/**
 * 贪心：先看对角、再看水平/竖直
 */
var minTimeToVisitAllPoints = function (points) {
  let res = 0

  for (let i = 1; i < points.length; ++i) {
    let [[x1, y1], [x2, y2]] = [points[i - 1], points[i]]

    // 对角
    const min = Math.min(Math.abs(x1 - x2), Math.abs(y1 - y2))
    // 更新位置
    if (x1 < x2) {
      x1 += min
    } else {
      x2 += min
    }
    if (y1 < y2) {
      y1 += min
    } else {
      y2 += min
    }
    // 累加
    res += min

    // 竖直/水平
    res += Math.abs(x1 - x2) + Math.abs(y1 - y2)
  }

  return res
};

module.exports = minTimeToVisitAllPoints