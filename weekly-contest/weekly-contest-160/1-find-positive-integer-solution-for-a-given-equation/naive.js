/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */

/**
 * 暴力
 * 
 * 时间：O(N^2)，800ms
 */
var findSolution = function(customfunction, z) {
  const [min, max] = [1, 1000]
  const res = []
  
  for (let x = min; x <= max; ++x) {
    for (let y = min; y <= max; ++y) {
      if (customfunction.f(x, y) === z) {
        res.push([x, y])
        break
      }
    }
  }

  return res
};

console.log(findSolution({
  f: (a, b) => a + b,
}, 5))