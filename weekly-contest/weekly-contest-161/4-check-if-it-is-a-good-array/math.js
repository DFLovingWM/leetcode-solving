/**
 * 最大公约数
 */
var isGoodArray = function (nums) {
  return nums.reduce((a, b) => getGCD(a, b)) === 1
};

function getGCD (a, b) {
  if (b === 0) return a
  return getGCD(b, a % b)
}

[
  [12,5,7,23],
  [29,6,10],
  [3,6]
].forEach(a => {
  console.log(isGoodArray(a))
})