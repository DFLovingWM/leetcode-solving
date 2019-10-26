/**
 * Hash
 * - Time: O(A+B), 68ms
 * - Space: O(A), 36MB
 */
var intersect = function(A, B) {
  if (A.length > B.length) { // Make sure A is the shorter array, which will build a hash map.
    [A, B] = [B, A]
  }

  let hash = new Map()

  for (const a of A) {
    hash.set(a, (hash.get(a) || 0) + 1)
  }

  let result = []
  for (const b of B) {
    let count = hash.get(b) || 0
    if (count > 0) {
      result.push(b)
      hash.set(b, count - 1) // Decrement count by 1
    }
  }

  return result
};