/**
 * T(N2), S(1)
 * [TLE]
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function subarraySum (nums, target) {
  let count = 0

  for (let i = 0; i < nums.length; ++i) { // Starting from each node
    let sum = 0
    for (let j = i; j < nums.length; ++j) { // Add to the end, and compare 'sum' and 'target'
      sum += nums[j]
      if (sum === target) ++count
    }
  }

  return count
}

module.exports = subarraySum