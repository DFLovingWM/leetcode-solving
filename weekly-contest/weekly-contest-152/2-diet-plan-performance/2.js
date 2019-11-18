/**
 * 暴力为O(NK)。O(N)解法：
 * - 前缀和
 * - 滑动窗口
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
  const prefix = [0]
  for (const c of calories) {
    prefix.push(prefix[prefix.length - 1] + c)
  }

  let score = 0
  for (let i = k; i < prefix.length; ++i) {
    score += getScore(prefix[i] - prefix[i - k], lower, upper)
  }
  return score
};

function getScore (sum, lower, upper) {
  return sum > upper ? 1 : sum < lower ? -1 : 0
}

[
  [[1,2,3,4,5], 1, 3,3],
  [[3,2],2,0,1],
  [[6,5,0,0],2,1,5],
  [[6,13,8,7,10,1,12,11], 6,5,37],
].forEach(input => {
  console.log(dietPlanPerformance(...input))
})
