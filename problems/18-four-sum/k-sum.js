/**
 * K-sum问题：排序 + 回溯 + 双指针/哈希
 * 
 * 时间：`O(N^(K-1))`, 120ms
 */
var fourSum = function (nums, target) {
  return kSum(nums, 4, target)
};

function kSum (arr, K, targetSum) {
  arr.sort((a, b) => a - b) // 排序，作为对回溯的剪枝
  const res = []

  function backtrack (from, restK, restSum, acc) {
    // 剪枝
    if (restK * arr[from] > restSum || restK * arr[arr.length - 1] < restSum) return

    // 叶子结点：使用双指针或哈希
    if (restK === 2) {
      const exist = new Set()
      let prevLeft = null

      for (let i = from; i < arr.length; ++i) {
        const [left, right] = [restSum - arr[i], arr[i]]
        // 去重：同样的数字只取第一个
        if (exist.has(left) && left !== prevLeft) {
          res.push([...acc, left, right])
          prevLeft = left
        }
        exist.add(right)
      }

      return
    }

    for (let i = from; i < arr.length; ++i) {
      if (i > from && arr[i] === arr[i - 1]) {
        // 去重：同上，选择下一个数字时，相同的只能选择一个（第一个）
        continue
      }
      backtrack(i + 1, restK - 1, restSum - arr[i], acc.concat(arr[i]))
    }
  }

  backtrack(0, K, targetSum, [])
  return res
}

module.exports = fourSum