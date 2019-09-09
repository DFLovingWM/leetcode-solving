/**
 * K-sum问题，时间可达到O(N ^ (K - 1))
 * 
 * 时间：O(N^2)
 * 空间：O(1)
 */
var threeSumSmaller = function(nums, target) {
  nums = nums.slice().sort((a, b) => a - b)

  let res = 0
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] * 3 >= target) {
      // “剪枝”
      break
    }

    const targetSum = target - nums[i]
    let [L, R] = [i + 1, nums.length - 1]
    while (L < R) {
      const sum = nums[L] + nums[R]
      if (sum >= targetSum) { // 不能满足比target小
        --R // 缩小
      } else { // 满足
        // 既然L+R满足，那么以L开头的、R更小的也满足，直接数个数
        res += R - L
        // 增加
        ++L
      }
    }
  }

  return res
};

[
  [[-2,0,1,3], 2],
  [[3,1,0,-2], 4],
].forEach(input => {
  console.log(threeSumSmaller(...input))
})