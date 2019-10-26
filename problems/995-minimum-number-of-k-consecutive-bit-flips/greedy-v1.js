/**
 * Greedy(simple version)：scan once, and flip K bits when meets 0.
 * 
 * - Time: O(N * K), 1956ms
 * - Space: O(1), 39.3MB
 */
function minKBitFlips (arr, K) {
  let flipCount = 0

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === 0) {
      if (i + K - 1 >= arr.length) return -1

      flip(arr, i, K)
      ++flipCount
    }
  }

  return flipCount
}

function flip (arr, from, length) {
  for (let i = from; i < from + length; ++i) {
    arr[i] = arr[i] ^ 1
  }
}

/*
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
*/