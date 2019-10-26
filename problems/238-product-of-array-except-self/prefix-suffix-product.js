/**
 * 前缀积 + 后缀积
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
var productExceptSelf = function(nums) {
  const length = nums.length + 1

  // 前缀积
  const left = [1]
  for (const num of nums) {
    left.push(left[left.length - 1] * num)
  }

  // 后缀积
  const right = [1]
  for (let i = nums.length - 1; i >= 0; --i) {
    right.push(right[right.length - 1] * nums[i])
  }
  right.reverse()

  let res = []
  for (let i = 0; i < nums.length; ++i) {
    res.push(left[i] * right[i + 1])
  }
  return res
};

[
  [1,2,3,4]
].forEach(arr => {
  console.log(productExceptSelf(arr))
})