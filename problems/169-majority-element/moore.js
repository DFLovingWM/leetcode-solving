/**
 * 摩尔投票法（很有趣的算法）：
 * 众数的个数超过一半，说明其它所有数字的个数加起来，都不够众数多
 * 
 * O(N), 88ms
 */
function majorityElement (nums) {
  let count = 1
  let candidate = nums[0]

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === candidate) {
      // 相等，该数字的个数+1
      ++count
    } else {
      // 不相等，则该数字的个数-1
      --count
      // 该数字被其它数字少，说明该数字暂时不是众数
      // 于是其它数字成为候选人
      if (count < 0) {
        candidate = nums[i]
        count = 1
      }
    }
  }

  return candidate
}

[
  [3,2,3],
  [2,2,1,1,1,2,2],
].forEach(arr => {
  console.log(majorityElement(arr))
})
