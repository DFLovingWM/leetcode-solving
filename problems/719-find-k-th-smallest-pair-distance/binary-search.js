/**
 * 二分枚举 + 贪心
 * 时间：O(NlogX + NlogN)，其中X为最小、最大值的差值。 耗时84ms
 */
var smallestDistancePair = function(nums, K) {
  nums = nums.slice().sort((a, b) => a - b) // 排序

  const n = nums.length
  let L = 0
  let R = nums[n - 1] - nums[0] + 1

  while (L < R) { // O(logX)
    const M = L + (R - L >> 1)

    // 算一下小于等于M的个数（即看下M属于第几个）
    // 之前的排序保证了这一步的时间是O(N)
    let count = 0
    let slow = 0
    for (let fast = 1; fast < n; ++fast) {
      while (nums[fast] - nums[slow] > M) {
        ++slow
      }
      count += fast - slow
    }

    if (count < K) {
      L = M + 1
    } else {
      R = M
    }
  }

  return L
}

module.exports = smallestDistancePair