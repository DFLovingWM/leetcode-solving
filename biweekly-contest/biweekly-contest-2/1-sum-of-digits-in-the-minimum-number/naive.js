/**
 * 直接来
 */
var sumOfDigits = function (A) {
  let min = Math.min(...A)
  let sum = 0
  while (min) {
    sum += min % 10
    min = Math.floor(min / 10)
  }
  return (sum & 1) ^ 1
};

[
  [34,23,1,24,75,33,54,8],
  [99,77,33,66,55],
].forEach(arr => {
  console.log(sumOfDigits(arr))
})