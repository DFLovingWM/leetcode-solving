/**
 * 遇到非目标元素，就将它交换到最前面
 * 时间：O(N), 72ms
 * 空间：O(1), 33.6MB
 */
var removeElement = function(nums, target) {
  let [lastValid, i] = [-1, 0]
  for (i; i < nums.length; ++i) {
    if (nums[i] !== target) { // 非目标元素
      ++lastValid
      nums[lastValid] = nums[i]
    }
  }
  return lastValid + 1
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
