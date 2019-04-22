/**
 * 贪心：从终点(可达)开始往前扫描，类似`bottom-up DP`
 * `O(N)`, 76ms
 */
function canJump (arr) {
  let lastCanReach = arr.length - 1
  for (let i = arr.length - 1; i >= 0; --i) {
    if (i + arr[i] >= lastCanReach) {
      lastCanReach = i
      if (lastCanReach === 0) return true
    }
  }
  return false
}