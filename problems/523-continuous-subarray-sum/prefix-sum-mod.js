/**
 * 前缀和 + 取余
 */
var checkSubarraySum = function(nums, K) {
  const getIndex = new Map()
  let sum = 0
  getIndex.set(sum, -1)
  for (let i = 0; i < nums.length; ++i) {

    // 这里需要判断，如果K=0，就不要对0取余了
    if (K !== 0) {
      sum = (sum + nums[i]) % K
    } else {
      sum = sum + nums[i]
    }

    if (getIndex.has(sum)) {
      if (i - getIndex.get(sum) >= 2) { // 长度 >= 2
        return true
      }
    } else {
      getIndex.set(sum, i)
    }
  }
  return false
};

[
  [[23,2,4,6,7], 6],
  [[23,2,6,4,7], 6],
  [[23,2,6,4,7],0],
].forEach(input => {
  console.log(checkSubarraySum(...input))
})
