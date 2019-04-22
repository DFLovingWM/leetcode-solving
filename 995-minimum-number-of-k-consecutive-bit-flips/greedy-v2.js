const GOOD = 1
const BAD = 0

/**
 * Based on version 1, use a queue which maintains the flips of current bits, to achieve a O(N) time complexity.
 * 
 * - Time: O(N), 128ms
 * - Space: O(K), 42.2MB
 * 
 * Reference：https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/discuss/238538/Python-O(n)-using-queue
 */
function minKBitFlips (arr, K) {
  let flips = [] // Queue, which keeps track of the flipped index of the current bit.
  let result = 0

  for (let i = 0; i < arr.length; ++i) {

    // If the newest state of current bit is BAD, then flip it.
    if (
      (flips.length % 2 === 0 && arr[i] === BAD) ||
      (flips.length % 2 === 1 && arr[i] === GOOD)
    ) {
      if (i + K - 1 >= arr.length) return -1
      ++result
      flips.push(i + K - 1)
    }

    // Maintain the queue: remove the farest flip(head of the queue) which has no impact to the current bit.
    if (i === flips[0]) {
      flips.shift()
    }
  }

  return result
}


[
  {
    A: [0,1,0],
    K: 1
  },
  {
    A: [1,1,0],
    K: 2
  },
  {
    A: [0,0,0,1,0,1,1,0],
    K: 3
  }
].forEach(({ A, K }) => {
  console.log(minKBitFlips(A, K))
})
