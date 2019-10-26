/**
 * T(N), 64ms
 * S(1), 35.1MB
 */
var singleNumber = function(nums) {
  return nums.reduce((a, b) => a ^ b)
};

[
  [2,2,1],
  [4,1,2,1,2]
].forEach(arr => {
  console.log(singleNumber(arr))
})

