/**
 * 二分查找
 * 
 * 时间：O(logN), 92ms
 * 空间：O(1), 34.1MB
 */
var findMin = function (nums) {
  if (nums.length <= 2) return Math.min(...nums);

  let left = 0, right = nums.length;
  // 取尾元素作为二分参照物
  // 因为在旋转数组中，尾元素可能是答案
  // 所以下面的二分过程中，等于pivot时，`mid`是候选值，所以有`right = mid`
  const pivot = nums[nums.length - 1];

  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (nums[mid] > pivot) { // 更大，目标在右边（不包括mid）
      left = mid + 1;
    } else if (nums[mid] <= pivot) { // 更小，目标在左边（包括mid）
      right = mid;
    }
  }

  if (left >= nums.length) return nums[0]; // 不是旋转数组
  return nums[left];
};