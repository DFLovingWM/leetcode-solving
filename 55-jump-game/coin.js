/**
 * [AC]
 * 类似硬币组合的解法
 * `O(N2)`, 耗时：808ms
 */
var canJump = function(nums) {
  const { length } = nums
  let canReach = Array.from({ length }, () => false)
  canReach[0] = true
  for (let i = 0; i < length; ++i) {
    // 如果该位置可达
    if (canReach[i]) {
      // 则之后连续的 nums[i] 个位置都设为 true
      for (let j = 0; j <= nums[i]; ++j) {
        canReach[i + j] = true
      }
    }
  }
  return canReach[length - 1]
};

[
  [2,3,1,1,4],
  [3,2,1,0,4],
].forEach(arr => {
  console.log(canJump(arr))
})