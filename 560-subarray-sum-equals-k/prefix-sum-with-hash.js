/**
 * 前缀和 + Map/Hash：O(N)
 * 可以参考：https://leetcode.com/problems/subarray-sum-equals-k/discuss/102106/Java-Solution-PreSum-%2B-HashMap
 */
function subarraySum (nums, targetSum) {
  const count = new Map()
  count.set(0, 1)

  let sum = 0
  let res = 0
  for (const num of nums) {
    sum += num
    if (count.has(sum - targetSum)) {
      res += count.get(sum - targetSum)
    }
    count.set(sum, (count.get(sum) || 0) + 1)
  }
  return res
}
