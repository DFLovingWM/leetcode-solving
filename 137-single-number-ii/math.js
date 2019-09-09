/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let A = sum(Array.from(new Set(nums)))
  let B = sum(nums)
  return (A * 3 - B) / 2
};

function sum (arr) {
  return arr.reduce((a, b) => a + b)
}
