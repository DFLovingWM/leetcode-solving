/**
 * 排序 + 数学
 * 
 * 时间：O(NlogN)
 */
var visiblePoints = function(points, angle, location) {
  const [x0, y0] = location;
  // 与`location`相同的点的数目
  let same = 0;
  // 其余点组成的数组
  let radians = [];

  // 求出每一个点相对于`location`的角度
  for (const [x, y] of points) {
    if (x === x0 && y === y0) {
      ++same;
    } else {
      radians.push(Math.atan2(y - y0, x - x0) * 180 / Math.PI);
    }
  }
  // 排序
  radians.sort((a, b) => a - b);
  // 用循环数组表示圆
  const n = radians.length;
  for (let i = 0; i < n; ++i) {
    radians.push(radians[i] + 360);
  }

  // 双指针找出最大点数
  let res = 0;
  let j = -1;
  for (let i = 0; i < n; ++i) {
    while (j + 1 < 2 * n && radians[j + 1] - radians[i] <= angle) {
      ++j;
    }
    res = Math.max(res, j - i + 1);
  }
  return res + same;
};
