/**
 * 前缀和 + 二分
 * 时间：O(NlogN), 344ms
 */
var canEat = function(candiesCount, queries) {
  const p = [0];
  for (const n of candiesCount) {
    p.push(p[p.length - 1] + n);
  }

  const res = [];
  for (const [type, day, cap] of queries) {
    const min = 1 * (day + 1);
    const max = cap * (day + 1);
    const left = bisectLeft(p, min) - 1;
    const right = bisectLeft(p, max) - 1;
    res.push(left <= type && type <= right);
  }

  return res;
};

function bisectLeft(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (target <= arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

module.exports = canEat;
