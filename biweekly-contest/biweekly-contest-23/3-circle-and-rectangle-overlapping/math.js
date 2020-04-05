/**
 * 判断相交
 * 
 * 时间：O(1), 56ms
 */
var checkOverlap = function (r, cx, cy, x1, y1, x2, y2) {
  const [x0, y0] = [(x1 + x2) / 2, (y1 + y2) / 2]; // 矩形中心

  const v = [Math.abs(x0 - cx), Math.abs(y0 - cy)]; // 向量
  const h = [x2 - x0, y2 - y0]; // 向量

  // 向量
  const u = [
    Math.max(v[0] - h[0], 0),
    Math.max(v[1] - h[1], 0)
  ];
  // u <= r说明相交
  return Math.pow(u[0], 2) + Math.pow(u[1], 2) <= r * r;
};

module.exports = checkOverlap;