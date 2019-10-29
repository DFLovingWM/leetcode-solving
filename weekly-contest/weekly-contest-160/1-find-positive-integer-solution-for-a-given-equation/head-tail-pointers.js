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
 * 头尾双指针
 * 
 * 时间：O(N), 68ms
 */
var findSolution = function(customfunction, z) {
  const [min, max] = [1, 1000]
  let L = min
  let R = max
  const res = []

  while (L <= max && R >= min) {
    const tmp = customfunction.f(L, R)
    if (tmp === z) {
      res.push([L, R])
      --R
      ++L
    } else if (tmp > z) {
      --R
    } else {
      ++L
    }
  }

  return res
};

console.log(findSolution({
  f: (a, b) => a + b,
}, 5))