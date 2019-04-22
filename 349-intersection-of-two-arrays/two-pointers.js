/**
 * Two-pointer approach, refering to: https://leetcode.com/problems/intersection-of-two-arrays/discuss/81969/Three-Java-Solutions
 * 
 * - Time: O(NlogN), 68ms
 * - Space: O(1), 35.3MB
 */
var intersection = function(A, B) {
  A.sort((a, b) => a - b)
  B.sort((a, b) => a - b)

  let result = [],
      a = 0,
      b = 0
  while (a < A.length && b < B.length) {
    while (a < A.length && (a > 0 && A[a] === A[a - 1])) ++a
    if (a >= A.length) break

    while (b < B.length && (b > 0 && B[b] === B[b - 1])) ++b
    if (b >= B.length) break
    
    if (A[a] === B[b]) {
      result.push(A[a])
      ++a
      ++b
    } else if (A[a] > B[b]) {
      ++b
    } else {
      ++a
    }
  }
  
  return result
};

[
  [[1], [1]],
  [[1,2,2,1], [2, 2]],
  [[4,9,5], [9,4,9,8,4]]
].forEach(input => {
  console.log(intersection(...input))
})