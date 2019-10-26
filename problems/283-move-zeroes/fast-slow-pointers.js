/**
 * 快慢双指针：
 * 1. 快指针寻找非0元素，慢指针填充元素。
 * 2. 最后慢指针将剩余的位置全部填充为0
 * 
 * 时间：O(N), 68ms
 * 空间：O(1)
 */
var moveZeroes = function (nums) {
  let slow = 0

  // 将非0元素扔到前面
  for (let fast = 0; fast < nums.length; ++fast) {
    if (nums[fast] !== 0) {
      if (slow !== fast) nums[slow] = nums[fast]
      ++slow
    }
  }

  // 剩余的位置全部填充为0
  for (; slow < nums.length; ++slow) {
    nums[slow] = 0
  }
};

[
  [0,1,0,3,12],
  [1,0],
  [1,0,1],
].forEach(arr => {
  moveZeroes(arr)
  console.log(arr)
})