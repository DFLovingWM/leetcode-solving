/**
 * hash记住(i, j)的值，以后不用重新算
 * 时间复杂度：O(N3)，但用了hash记忆化，接近O(N2)
 * [220ms]
 */
function countTriplets (arr) {
  let result = 0
  let f = new Map()

  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length; ++j) {
      let tmp = (arr[i] & arr[j])
      if (!f.has(tmp)) { // If hasn't been calculated, then calculate it, and remember.
        let count = 0
        for (let k = 0; k < arr.length; ++k) {
          if ((tmp & arr[k]) === 0) {
            ++count
          }
        }
        f.set(tmp, count) // Remember (i,j)
      }
      // console.log(f.get(tmp))
      result += f.get(tmp)
    }
  }
  return result
}

module.exports = countTriplets