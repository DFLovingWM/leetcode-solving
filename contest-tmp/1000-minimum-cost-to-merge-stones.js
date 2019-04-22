/**
 * @param {number[]} stones
 * @param {number} K
 * @return {number}
 */
var mergeStones = function(stones, K) {
  if ((stones.length - 1) % (K - 1) !== 0) return -1

  let result = 0
  while (stones.length > 1) {
    let L = 0
    let curSum = stones.slice(L, L + K).reduce((acc, item) => acc + item, 0),
        minSum = curSum
    let minL = L

    while (L + K - 1 < stones.length) {
      ++L
      let sum = curSum - stones[L - 1] + stones[L + K - 1]
      if (sum < minSum) {
        minL = L
        minSum = sum
      }
      curSum = sum
    }

    result += minSum
    stones.splice(minL, K, minSum)
  }

  return result
};

[
  [[3,2,4,1], 2],
  [[3,2,4,1], 3],
  [[3,5,1,2,6], 3]
].forEach(input => {
  console.log(mergeStones(...input))
  console.log()
})