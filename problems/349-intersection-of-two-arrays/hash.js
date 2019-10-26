/**
 * Hash
 * - Time: O(N), 64ms
 * - Space: O(N), 36.2MB
 */
var intersection = function(nums1, nums2) {
  let exist1 = new Map(), // Goal: avoid repeats.
      exist2 = new Map() // Goal: search in O(1).
  let intersectionSet = []
  
  for (const num1 of nums1) exist1.set(num1, true)
  for (const num2 of nums2) exist2.set(num2, true)

  for (const n of exist1.keys()) {
    if (exist2.has(n)) {
      intersectionSet.push(n)
    }
  }

  return intersectionSet
};

// [
//   [[1,2,2,1], [2, 2]],
//   [[4,9,5], [9,4,9,8,4]]
// ].forEach(input => {
//   console.log(intersection(...input))
// })
