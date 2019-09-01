/**
 * 前缀和 + DP
 */
var maxSubArray = function(nums) {
  const S = [0]
  for (const num of nums) {
    S.push(S[S.length - 1] + num)
  }

  let minS = S[0]
  let result = -Infinity
  for (let i = 1; i < nums.length; ++i) {
    result = Math.max(result, S[i] - minS)
    minS = Math.min(minS, S[i])
  }
  return result
};

[
  [-2,1,-3,4,-1,2,1,-5,4],
].forEach(arr => {
  console.log(maxSubArray(arr))
})
