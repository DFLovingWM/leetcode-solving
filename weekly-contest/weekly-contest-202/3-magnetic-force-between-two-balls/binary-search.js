/**
 * 二分枚举
 */
var maxDistance = function(position, m) {
  position.sort((a, b) => a - b);

  let left = 0;
  let right = position[position.length - 1];
  let ans = 0;

  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (check(mid, m, position)) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return ans;
};

function check(ans, M, position) {
  let m = 0;
  let prev = -1;
  for (let i = 0; i < position.length; ++i) {
    const curr = position[i];
    if (prev === -1 || curr - prev >= ans) { // 满足 ans 距离
      prev = curr;
      ++m;
      if (m === M) { // 完成
        return true;
      }
    }
  }
  return false;
}
