/**
 * O(N3)暴力
 * [3668ms]
 */
function countTriplets (arr) {
  let result = 0

  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length; ++j) {
      for (let k = 0; k < arr.length; ++k) {
        const temp = arr[i] & arr[j] & arr[k]
        if (temp === 0) {
          ++result
        }
      }
    }
  }

  return result
}

// module.exports = countTriplets