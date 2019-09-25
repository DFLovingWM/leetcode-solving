/**
 * 排序
 */
var minimumAbsDifference = function(arr) {
  arr = arr.slice().sort((a, b) => a - b)

  let res = []
  let diff = Infinity
  for (let i = 1; i < arr.length; ++i) {
    const a = arr[i - 1]
    const b = arr[i]
    if (b - a < diff) {
      diff = b - a
      res = [[a, b]]
    } else if (b - a === diff) {
      res.push([a, b])
    }
  }

  return res
};

[
  [4,2,1,3],
  [1,3,6,10,15],
  [3,8,-10,23,19,-4,-14,27],
].forEach(a => {
  console.log(minimumAbsDifference(a))
})