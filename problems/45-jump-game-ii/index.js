/**
 * `O(N * M)`, 544ms
 */
var jump = function(nums) {
  let length = nums.length
  let jumps = Array.from({ length }, () => Infinity)

  jumps[0] = 0
  for (let i = 0; i < length; ++i) {
    let [start, end] = [i + 1, Math.min(i + nums[i], length - 1)]
    for (let j = start; j <= end; ++j) {
      jumps[j] = Math.min(jumps[i] + 1, jumps[j])

      if (j === length - 1) {
        console.log(jumps)
        return jumps[j]
      }
    }
  }

  return 0
};

[
  [1,2,1,1,1],
].forEach(nums => {
  console.log(jump(nums))
})