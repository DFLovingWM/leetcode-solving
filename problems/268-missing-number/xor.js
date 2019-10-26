/**
 * 异或（XOR）
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var missingNumber = function(nums) {
  let n = nums.length
  let res = 0 // 异或的初始值为0（因为A xor 0 = A）

  // 全部数字加进来
  for (let i = 0; i <= n; ++i) {
    res = res ^ i
  }

  // 一个个排除
  for (const num of nums) {
    res = res ^ num
  }
  
  return res
};

[
  [3,0,1],
  [9,6,4,2,3,5,7,0,1]
].forEach(nums => {
  console.log(missingNumber(nums))
})