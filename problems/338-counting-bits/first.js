/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let result = [0, 1, 1]
  for (let n = 3; n <= num; ++n) {
    const lowerBound = Math.pow(2, Math.floor(Math.log2(n)))
    result.push(1 + result[n - lowerBound])
  }
  return result.slice(0, num + 1)
}

module.exports = countBits