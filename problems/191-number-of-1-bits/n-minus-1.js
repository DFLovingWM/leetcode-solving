/**
 * n & (n - 1)
 */
var hammingWeight = function (n) {
  let count = 0

  while (n) {
    n = n & n - 1
    ++count
  }

  return count
};

module.exports = hammingWeight