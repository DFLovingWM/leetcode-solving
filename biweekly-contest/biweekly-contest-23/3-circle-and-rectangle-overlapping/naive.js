/**
 * 暴力/投机法：坐标都是整数，所以只需要对整数范围进行暴力遍历
 * 
 * 时间：O(N^2)
 */
var checkOverlap = function (radius, cx, cy, x1, y1, x2, y2) {
  for (let x = x1; x <= x2; ++x) {
    for (let y = y1; y <= y2; ++y) {
      if (dist(x, y, cx, cy) <= radius) {
        return true;
      }
    }
  }
  return false;
};

// 欧拉距离
function dist(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

module.exports = checkOverlap;