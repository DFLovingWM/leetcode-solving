/**
 * Recursive solution, refering to:
 * [lee215: Java-Brute-Force](https://leetcode.com/problems/clumsy-factorial/discuss/252247/Java-Brute-Force)
 * 
 * Double negations makes positive -- that's why we need a `helper` function to make recursion, instead of `clumsy`.
 * 
 * - Time: O(N / 4) = O(N), 60ms
 */
var clumsy = function(N) {
  let basicAnswers = {
    1: 1,
    2: 2,
    3: 6,
    4: 7
  }
  if (N <= 4) {
    return basicAnswers[N]
  }
  return Math.floor(N * (N - 1) / (N - 2)) + (N - 3) - helper(N - 4) // * / + -
};

function helper (N) {
  let basicAnswers = {
    1: 1,
    2: 2,
    3: 6,
    4: 5
  }
  if (N <= 4) {
    return basicAnswers[N]
  }
  return Math.floor(N * (N - 1) / (N - 2)) - (N - 3) + helper(N - 4) // * / - +. Double negations makes positive.
}

// [
//   [4],
//   [10]
// ].forEach(input => {
//   console.log(clumsy(...input))
// })