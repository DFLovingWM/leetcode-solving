/**
 * 双指针：类似于快排的partition过程
 * 
 * 时间：O(N), 108ms
 * 空间：O(1), 43.6MB
 */
var exchange = function (nums) {
  let lastOdd = -1; // 奇数范围的右边界
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] & 1) { // 如果是奇数
      swap(nums, ++lastOdd, i);
    }
  }
  return nums;
};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}