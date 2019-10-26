/**
 * DP，但是数组长度怎么缩短？
 */
const MOD = Math.pow(10, 9) + 7

var kConcatenationMaxSum = function(arr, k) {
  const length = arr.length
  const wholeLength = length * k

  const dp = Array.from({ length }, () => 0)
  dp[0] = arr[0]
  let res = Math.max(0, dp[0])

  for (let i = 1; i < wholeLength; ++i) {
    const lastI = (i - 1) % length
    const curI = i % length
    dp[curI] = arr[curI] % MOD + Math.max(0, dp[lastI]) % MOD
    res = Math.max(res, dp[curI])
  }

  return res
};

[
  [[1,2], 3],
  [[1,-2,1], 5],
  [[-1,-2], 7],
  [[1,-1], 1],
].forEach(input => {
  console.log(kConcatenationMaxSum(...input))
})