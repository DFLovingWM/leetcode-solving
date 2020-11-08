/**
 * 排序 + 二分
 * 
 * 时间：O(NlogN)
 */
var specialArray = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i <= n; ++i) { // 尝试每个数
    const j = bisectLeft(nums, i);
    const biggerCount = (j === -1 ? n : n - j);
    if (biggerCount === i) {
      return i;
    }
  }
  return -1;
};

function bisectLeft(arr, x) {
  let [left, right] = [0, arr.length];
  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (x > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}