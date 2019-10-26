/**
 * 回溯，依次装K个数字
 * 时间：124ms
 */
var canPartitionKSubsets = function(arr, K) {
  if (arr.length < K) return false // 少于桶数 => 失败
  
  let sum = 0
  let max = arr[0]
  for (const n of arr) {
    sum += n
    max = Math.max(max, n)
  }
  if (sum % K !== 0) return false // 不能均分 => 失败

  const target = sum / K
  if (max > target) return false // 如果存在大于桶的 => 失败

  arr = arr.slice().sort((a, b) => b - a) // 排序
  const buckets = Array.from({ length: K }, () => target) // 桶，存剩余容量
  return dfs(arr, 0, buckets)
};

function dfs (arr, i, buckets) {
  if (i === arr.length) {
    return true
  }

  for (let j = 0; j < buckets.length; ++j) { // 遍历所有桶
    if (buckets[j] >= arr[i]) { // 能放下
      buckets[j] -= arr[i] // 放下去
      if (dfs(arr, i + 1, buckets)) {
        return true
      }
      buckets[j] += arr[i] // 拿出来（回溯）
    }
  }
  return false
}

[
  [[4, 3, 2, 3, 5, 2, 1], 4],
  [[4,5,3,2,5,5,5,1,5,5,5,5,5,5,5,5], 14],
].forEach(input => {
  console.log(canPartitionKSubsets(...input))
})