/**
 * 求和，然后一个个做减法，剩余的就是没有出现的那个数字
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var missingNumber = function(nums) {
  let n = nums.length
  let sum = n * (n + 1) / 2
  for (const num of nums) {
    sum -= num
  }
  return sum
};

[
  [3,0,1],
  [9,6,4,2,3,5,7,0,1]
].forEach(nums => {
  console.log(missingNumber(nums))
})