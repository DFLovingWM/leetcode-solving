/**
 * 排序 + 数个数
 * O(NlogN), 耗时136ms
 */
var majorityElement = function(nums) {
  nums = nums.slice().sort()
  const halfCount = Math.floor((nums.length + 1) / 2)

  let count = 0
  for (let i = 0; i < nums.length; ++i) {
    if (i === 0 || nums[i] === nums[i - 1]) {
      ++count
      if (count === halfCount) {
        return nums[i]
      }
    } else {
      count = 1
    }
  }
};

[
  [3,2,3],
  [2,2,1,1,1,2,2],
].forEach(arr => {
  console.log(majorityElement(arr))
})
