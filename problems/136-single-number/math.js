/**
 * T(N), 88ms
 * S(N), 37.6MB
 */
var singleNumber = function(nums) {
  let A = sum([...new Set(nums)])
  let B = sum(nums)
  return A * 2 - B
};

function sum (arr) {
  return arr.reduce((a, b) => a + b)
}
