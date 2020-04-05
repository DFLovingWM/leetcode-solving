/**
 * 相交：心距 <= 边长之和
 */
var checkOverlap = function (radius, x_center, y_center, x1, y1, x2, y2) {
  const heartDist = getDist(x_center, y_center, (x1 + x2) / 2, (y1 + y2) / 2);
  const edgeSum = radius + (1);
  return heartDist <= edgeSum;
};

// 欧拉距离
function getDist(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

module.exports = checkOverlap;