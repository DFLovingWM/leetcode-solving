/**
 * 数据量太大，看起来应该只能二分
 * minMax
 */
var minimumSize = function(nums, maxOperations) {

  // 检查：在最大值为 max 时，所需的次数能否不超过 maxOperations 次
  function check(max) {
    let count = 0;
    for (const num of nums) {
      if (num % max === 0) {
        count += num / max - 1;
      } else {
        count += Math.floor(num / max);
      }
    }
    return count <= maxOperations;
  }

  let [left, right] = [0, 1e9 + 1];
  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
