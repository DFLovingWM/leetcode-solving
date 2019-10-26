/**
 * 前/后缀积 + 空间优化
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var productExceptSelf = function(nums) {
  let results = [1]

  let acc = 1
  for (let i = 1; i < nums.length; ++i) {
    acc *= nums[i - 1]
    results.push(acc)
  }

  acc = 1
  for (let i = nums.length - 2; i >= 0; --i) {
    acc *= nums[i + 1]
    results[i] *= acc
  }

  return results
};

[
  [1,2,3,4]
].forEach(arr => {
  console.log(productExceptSelf(arr))
})