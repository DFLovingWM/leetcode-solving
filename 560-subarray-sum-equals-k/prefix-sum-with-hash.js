/**
 * Prefix sum + Hash
 * T(N), S(N)
 * [136ms]
 * 参考：https://leetcode.com/problems/subarray-sum-equals-k/discuss/102106/Java-Solution-PreSum-%2B-HashMap
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function subarraySum (nums, target) {
  let prefixSumCount = {}
  prefixSumCount[0] = 1

  let sum = 0, count = 0
  for (const num of nums) {
    sum += num
    count += prefixSumCount[sum - target] || 0

    if (!prefixSumCount.hasOwnProperty(sum)) prefixSumCount[sum] = 0
    ++prefixSumCount[sum]
  }

  return count
}

module.exports = subarraySum