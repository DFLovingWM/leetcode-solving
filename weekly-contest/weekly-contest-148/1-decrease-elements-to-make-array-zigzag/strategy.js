/**
 * 分类讨论2种策略：要么把所有奇数位变小、要么把所有偶数位变小。取代价更小者
 * 
 * 时间：`O(N)`, 64ms
 */
var movesToMakeZigzag = function (nums) {
  const n = nums.length
  const strategy = [0, 0] // 两种策略的代价

  for (let i = 0; i < n; ++i) {
    // 找两边的更小值min
    let min = Infinity
    if (i - 1 >= 0) min = Math.min(min, nums[i - 1])
    if (i + 1 < n) min = Math.min(min, nums[i + 1])

    // nums[i]要变得比min更小
    if (nums[i] >= min) {
      strategy[i % 2] += nums[i] - (min - 1)
    }
  }

  return Math.min(...strategy)
};

[
  [1,2,3],
  [9,6,1,6,2],
  [2,7,10,9,8,9],
].forEach(arr => {
  console.log(movesToMakeZigzag(arr))
})