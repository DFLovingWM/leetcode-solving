/**
 * 线性遍历
 */
var missingNumber = function(arr) {
  let diff = arr[1] - arr[0]
  if (diff === 0) return arr[0]

  if (diff / (arr[2] - arr[1]) === 2) return arr[1] - diff / 2

  for (let i = 2; i < arr.length; ++i) {
    const d = arr[i] - arr[i - 1]
    if (d / diff === 2) {
      return arr[i] - diff
    }
  }
};

module.exports = missingNumber