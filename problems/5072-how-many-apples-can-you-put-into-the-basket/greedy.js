/**
 * 贪心：每次拿最小重量，数量上就最多
 * 时间：O(NlogN)，主要在排序。耗时56ms
 */

const LIMIT = 5000

var maxNumberOfApples = function(arr) {
  arr = arr.slice().sort((a, b) => a - b)

  let i
  let weight = 0
  for (i = 0; i < arr.length; ++i) {
    if (weight + arr[i] > limit) {
      break
    }
    weight += arr[i]
  }
  return i
};

// [
//   [100,200,150,1000],
//   [900,950,800,1000,700,800],
// ].forEach(arr => {
//   console.log(maxNumberOfApples(arr))
// })