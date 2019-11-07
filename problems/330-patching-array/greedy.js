/**
 * 贪心：比较当前值与最优值，抉择
 */
var minPatches = function (nums, n) {
  let miss = 1
  let res = 0
  let i = 0

  while (miss <= n) { // 循环至覆盖到n
    if (i < nums.length && nums[i] <= miss) { // 当前值小于等于最优值，则用之
      miss += nums[i]
      ++i
    } else { // 否则，自己先补一个最优
      ++res
      miss += miss
    }
  }

  return res
};

[
  [[1,3], 6],
  [[1,5,10], 20],
  [[1,2,2], 5],
  [[], 7],
].forEach(input => {
  console.log(minPatches(...input))
})