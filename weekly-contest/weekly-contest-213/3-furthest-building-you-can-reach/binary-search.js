/**
 * 二分枚举
 * 
 * 时间：O(NlogN * logX), 544ms
 */
var furthestBuilding = function(heights, bricks, ladders) {

  // 检查是否能到达`m`处
  function check(m) {
    const arr = [];
    for (let i = 1; i <= m; ++i) {
      const d = heights[i] - heights[i - 1];
      if (d > 0) {
        arr.push(d);
      }
    }
    arr.sort((a, b) => b - a);
    // 先处理大的，用梯子；剩下用砖头
    const need = arr.slice(ladders).reduce((acc, e) => acc + e, 0);
    return need <= bricks;
  }

  let [left, right] = [0, heights.length];
  let res = 0;
  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (check(mid)) {
      res = Math.max(res, mid);
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return res;
};

module.exports = furthestBuilding;
