/**
 * 二分枚举最大平均值，然后检验
 * 注意二分的编码细节
 * 
 * 时间：O(N * log(X * 100000))
 */
var findMaxAverage = function (nums, k) {
  let min = -10000
  let max = 10000
  for (const n of nums) {
    min = Math.min(min, n)
    max = Math.max(max, n)
  }

  let [left, right] = [min, max] // 左闭右闭
  let mid
  while (right - left > 1e-5) { // 差距落在误差范围内，二分过程停止
    mid = (left + right) / 2
    if (check(nums, k, mid)) { // 满足，则寻找更大的
      left = mid
    } else {
      right = mid
    }
  }
  return mid
};

// O(N)
function check (nums, K, maxAverage) {
  const delta = [0]
  for (let i = 0; i < nums.length; ++i) {
    delta[i + 1] = delta[i] + nums[i] - maxAverage
  }
  
  // 要使delta尽量大，就要记录之前的min
  let minIndex = 0
  for (let i = K; i < delta.length; ++i) {
    if (delta[i] >= delta[minIndex]) return true // 存在
    if (delta[i - K + 1] < delta[minIndex]) minIndex = i - K + 1 // 记录最小下标
  }
  return false
}

// console.log(findMaxAverage([1,12,-5,-6,50,3], 4))