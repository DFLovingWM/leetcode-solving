/**
 * 暴力：遍历每个二元组构成的圆心，遍历所有点
 * 时间： O(N^3)
 */
var numPoints = function(points, r) {
  const n = points.length;
  let res = 1;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (j === i) continue;
      for (const C of getCenters(points[i], points[j], r)) {
        let count = 0;
        for (const P of points) {
          if (pointInCircle(P, C, r)) {
            ++count;
          }
        }
        res = Math.max(res, count);
      }
    }
  }
  return res;
};

// 求A、B两点构成的圆的圆心
// 返回值为数组，为对称的2个圆心
function getCenters(A, B, r) {
  const di = dist(A, B);
  if (di > 2 * r) return []; // 表示A、B不可能同处一个半径为r的圆中

  const mid = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]; // AB中点
  if (di === 2 * r) return mid; // 表示AB恰好是直径，那么圆心只有1个

  const angle = Math.atan2(B[1] - A[1], B[0] - A[0]); // AB倾斜角
  const d = Math.sqrt(r * r - Math.pow(di / 2, 2)); // 圆心到AB的距离
  const xOffset = d * Math.sin(angle);
  const yOffset = d * Math.cos(angle);
  return [
    [mid[0] + xOffset, mid[1] - yOffset],
    [mid[0] - xOffset, mid[1] + yOffset]
  ];
}

// 判断点是否在圆中
function pointInCircle(P, C, r) {
  return dist(P, C) <= r;
}

// 欧拉距离
function dist(A, B) {
  return Math.sqrt(Math.pow(A[0] - B[0], 2) + Math.pow(A[1] - B[1], 2));
}

module.exports = numPoints;
