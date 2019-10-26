/**
 * 将数字当作下标，修改原数组的值，然后检测哪些没有改动
 * 参考：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/comments/9743
 */
var findDisappearedNumbers = function(nums) {
  for (const num of nums) {
    const index = Math.abs(num) - 1 // 数字范围是[1, N]，要转化为[0, N-1]需要要减1
    nums[index] = -Math.abs(nums[index]) // 改动：变为负数
  }

  // 检测
  let res = []
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > 0) {
      res.push(i + 1) // 还原时，记得加1
    }
  }
  return res
};

// [
//   [4,3,2,7,8,2,3,1],
// ].forEach(nums => {
//   console.log(findDisappearedNumbers(nums))
// })