/**
 * 贪心
 */
var largestSumAfterKNegations = function (arr, K) {
  // 排序，反转所有负数
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length && K > 0; ++i) {
    if (arr[i] < 0) {
      arr[i] = -arr[i]
      --K
    }
  }

  let sum = 0
  let min = Infinity
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i]
    min = Math.min(min, arr[i])
  }
  // 如果还有剩余，则挑选最小的来反转
  if (K % 2 === 1) {
    sum = sum - min - min
  }

  return sum
};

[
  [[4,2,3], 1],
  [[3,-1,0,2], 3],
  [[2,-3,-1,5,-4], 2],
].forEach(input => {
  console.log(largestSumAfterKNegations(...input))
})