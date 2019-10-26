/**
 * 1. 直接：O(N * M)
 */
var longestCommonPrefix = function (strs) {
  let prefix = ''
  let pivot = strs[0]
  for (let i = 0; i < pivot.length; ++i) {
    let j = 0
    for (; j < strs.length; ++j) {
      if (strs[j][i] !== pivot[i]) {
        break
      }
    }
    if (j === strs.length) {
      prefix += pivot[i]
    }
  }
  return prefix
}

module.exports = {
  longestCommonPrefix
}
