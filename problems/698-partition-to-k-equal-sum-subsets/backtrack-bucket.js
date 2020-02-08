/**
 * 回溯，依次装K个桶
 * 时间：72ms
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
  const used = Array.from({ length: arr.length }, () => false) // 标记是否使用过该位置上的数字
  return dfs(arr, used, target, K, target)
};

function dfs (arr, used, restSum, restCount, targetSum) {
  if (restCount === 0) {
    // K个集合都找完了，成功
    return true
  }

  if (restSum === 0) {
    // 某个集合找完了，就找下一个集合
    return dfs(arr, used, targetSum, restCount - 1, targetSum)
  }

  for (let i = 0; i < arr.length; ++i) {
    if (!used[i] && arr[i] <= restSum) { // 该数字没用过，而且不大于目标和
      // 使用
      used[i] = true
      if (dfs(arr, used, restSum - arr[i], restCount, targetSum)) return true

      // 回溯
      used[i] = false
    }
  }

  return false
};