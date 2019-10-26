/**
 * Bottom-up DP：因为都是向右边跳，所以可以用逆向思维，从终点开始逆推每个位置是否可达
 * 
 * 时间：O(N^2), 420ms
 */
var canJump = function (nums) {
  const n = nums.length
  const canReach = new Array(n).fill(false) // canReach[i]表示位置i是否能跳到终点
  canReach[n - 1] = true

  for (let i = n - 2; i >= 0; --i) {
    const farest = Math.min(n, i + nums[i] + 1) // 能跳到的最远下标（开区间）

    for (let j = i + 1; j < farest; ++j) {
      if (canReach[j]) { // 如果j可达，并且i能跳到j，则推出i也是可达的
        canReach[i] = true
        break
      }
    }
  }

  return canReach[0]
};

module.exports = canJump