/**
 * Greedy solution: flip the smallest (negative) integer every time.
 * Detail: 
 * 1. Sort, in non-decreasing order.
 * 2. Perform flips from the beginning, until no flips left, or no negative interger exists.
 * 3. If there's [odd] flips left, just flip the [minimum].
 * 
 * - Time: O(NlogN), 88ms
 */
var largestSumAfterKNegations = function(arr, K) {
  // 1
  arr.sort((a, b) => a - b)

  // 2
  for (
    let i = 0;
    i < arr.length && arr[i] < 0 && K > 0;
    ++i, --K
  ) {
    arr[i] *= -1
  }

  // 3
  let sum = 0, min = Infinity
  for (const n of arr) {
    sum += n
    min = Math.min(min, n)
  }
  if (K % 2 === 1) {
    sum = (sum - min) + (-min)
  }

  return sum
};

// [
//   [[4,2,3], 1],
//   [[3,-1,0,2], 3],
//   [[2,-3,-1,5,-4], 2]
// ].forEach(input => {
//   console.log(largestSumAfterKNegations(...input))
// })