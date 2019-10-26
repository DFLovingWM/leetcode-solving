/**
 * 移动数组
 * 时间：O(N^2), 84ms
 * 空间：O(1), 33.7MB
 */
var removeElement = function(nums, target) {
  let newLength = nums.length
  for (let i = 0; i < newLength; ++i) {
    if (nums[i] === target) {
      // 将后面所有元素往前移动
      for (let j = i + 1; j < newLength; ++j) {
        nums[j - 1] = nums[j]
      }
      // 修改长度
      --newLength
      --i
    }
  }
  // console.log('最终数组：', nums)
  return newLength
};

[
  [[3,2,2,3], 3],
  [[0,1,2,2,3,0,4,2], 2],
  [[1,1,1,1,1], 0],
  [[1,1,1,1,1], 1],
].forEach(input => {
  console.log(removeElement(...input))
})