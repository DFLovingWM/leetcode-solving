/**
 * 滑动窗口：
 * 
 * 时间：O(N), 68ms
 */
var minSubArrayLen = function (targetSum, nums) {
  let sum = 0
  let minLength = Infinity
  let left = 0

  for (let right = 0; right < nums.length; ++right) {
    sum += nums[right]

    while (left <= right && sum >= targetSum) {
      minLength = Math.min(minLength, right - left + 1)
      sum -= nums[left++]
    }
  }

  return minLength === Infinity ? 0 : minLength
};

[
  [11, [1, 2, 3, 4, 5]],
].forEach(input => {
  console.log(minSubArrayLen(...input))
})