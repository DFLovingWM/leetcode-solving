/**
 * 线性遍历即可
 * 
 * 时间：O(N), 72ms
 */
var findLengthOfLCIS = function (nums) {
  let count = 0
  let maxCount = 0
  let prev = -Infinity

  for (const num of nums) {
    if (num > prev) { // 递增，累计
      ++count
    } else { // 非递增，重新算
      maxCount = Math.max(maxCount, count)
      count = 1
    }

    prev = num
  }
  // 最后再比较一次
  maxCount = Math.max(maxCount, count)

  return maxCount
};

[
  [1,3,5,7],
  [1,3,5,4,7],
  [2,2,2,2,2],
  []
].forEach(nums => {
  console.log(findLengthOfLCIS(nums))
})