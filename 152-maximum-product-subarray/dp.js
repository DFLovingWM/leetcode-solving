/**
 * DP
 */
var maxProduct = function(nums) {
  let { length } = nums,
      max = Array.from({ length: length + 1 }, _ => 1), // max[i] means the maximum product ending at position [i].
      min = Array.from({ length: length + 1 }, _ => 1), // min[i] means the minimum product ending at position [i].
      result = -Infinity

  for (let i = 0; i < length; ++i) {
    const num = nums[i]

    const candidates = [ // Clincher: for each new number, just pick the last MAX and MIN!
      max[i] * num,
      min[i] * num,
      num
    ]
    max[i + 1] = Math.max(...candidates)
    min[i + 1] = Math.min(...candidates)

    result = Math.max(result, max[i + 1])
  }

  return result
};

module.exports = maxProduct