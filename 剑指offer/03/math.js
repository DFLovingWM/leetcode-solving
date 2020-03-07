/**
 * 抽屉原理
 * 
 * 时间：O(N), 80ms
 * 空间：O(1), 40.5MB
 */
var findRepeatNumber = function (nums) {
  for (let i = 0; i < nums.length; ++i) {
    while (nums[nums[i]] !== nums[i]) { // 如果nums[i]不在正确位置上
      swap(nums, i, nums[i]);
    }
  }

  for (let i = 0; i < nums.length; ++i) {
    // 位置`i`上的数字不对，则返回该数字
    if (nums[i] !== i) {
      return nums[i];
    }
  }
};

// 在数组中交换两个位置
function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}