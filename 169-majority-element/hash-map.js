/**
 * Hash：用Map记录次数
 * O(N), 84ms
 */
var majorityElement = function(nums) {
  const countMap = new Map()
  const cond = Math.floor((nums.length + 1) / 2)
  for (const num of nums) {
    const newCount = 1 + (countMap.get(num) || 0)
    countMap.set(num, newCount)
    if (newCount === cond) {
      return num
    }
  }
};

[
  [3,2,3],
  [2,2,1,1,1,2,2],
].forEach(arr => {
  console.log(majorityElement(arr))
})
