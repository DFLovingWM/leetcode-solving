/**
 * 记录最小、第2小元素
 * 
 * 时间：O(N), 72ms
 * 空间：O(1)
 */
var increasingTriplet = function (nums) {
  let min = Infinity
  let min2 = Infinity

  for (const n of nums) {
    if (n <= min) {
      min = n
    } else if (n <= min2) {
      min2 = n
    } else {
      return true // 遇到第3小的元素，表示
    }
  }

  return false
};

[
  [1,2,3,4,5],
  [5,4,3,2,1],
  [1,2,1,2,1,2,1],
].forEach(n => {
  console.log(increasingTriplet(n))
})