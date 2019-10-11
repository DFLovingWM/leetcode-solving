/**
 * 设数组长度为N，则答案为2种情况：
 * - [1, N]：中间缺了
 * - N+1：所有数字都能放在正确位置上，缺了最后一个
 * 所以可以将数字放到对应的下标上
 */
var firstMissingPositive = function (nums) {
  const isValid = n => n >= 1 && n <= nums.length

  for (let i = 0; i < nums.length; ++i) {
    while (isValid(nums[i]) && nums[i] !== nums[nums[i] - 1]) { // 合法数字，但没有在正确的位置上
      swap(nums, i, nums[i] - 1) // 交换
    }
  }

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== i + 1) { // 该位置上的值应该是`i+1`
      return i + 1
    }
  }

  return nums.length + 1
};

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}