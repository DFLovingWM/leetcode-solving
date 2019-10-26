/**
 * 遇到目标元素，就将它交换到末尾
 * 时间：O(N), 72ms
 * 空间：O(1), 33.6MB
 */
var removeElement = function(nums, target) {
  let [L, R] = [0, nums.length - 1]
  let swapCount = 0
  while (L <= R) {
    if (nums[L] === target) { // 如果是目标元素
      // [nums[L], nums[R]] = [nums[R], nums[L]];
      nums[L] = nums[R]
      --R
      ++swapCount
    } else {
      ++L
    }
  }
  // console.log('最终数组：', nums)
  return nums.length - swapCount
};

[
  [[3,2,2,3], 3],
  [[0,1,2,2,3,0,4,2], 2],
  [[1,1,1,1,1], 0],
  [[1,1,1,1,1], 1],
  [[1], 1],
].forEach(input => {
  console.log(removeElement(...input))
})
