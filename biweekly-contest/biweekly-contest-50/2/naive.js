/**
 * 暴力 + 判断点与圆的位置关系
 */
var countPoints = function(points, queries) {
  return queries.map(([cx, cy, r]) => {
    return points.filter(([x, y]) => {
      return Math.pow(x - cx, 2) + Math.pow(y - cy, 2) <= Math.pow(r, 2)
    }).length;
  });
};