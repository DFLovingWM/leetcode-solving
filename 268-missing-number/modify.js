/**
 * 类似于448题的做法，将数字当成下标，修改原数组(加nk)
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var missingNumber = function(nums) {
  const n = nums.length + 1

  while (nums.length < n) { // 将数组补到(N+1)个（挑选已有元素，比如head元素）
    nums.push(nums[0])
  }

  // 修改原数组：加n
  for (const num of nums) {
    const index = num % n
    nums[index] += n * 2
  }

  // 检查：看哪个小于n
  let res
  for (let i = 0; i < n; ++i) {
    if (nums[i] < n) {
      res = i
    }
  }
  return res
};

[
  [3,0,1],
  [9,6,4,2,3,5,7,0,1]
].forEach(nums => {
  console.log(missingNumber(nums))
})