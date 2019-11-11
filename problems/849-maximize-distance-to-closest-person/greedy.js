/**
 * 找最大间隔
 */
var maxDistToClosest = function (seats) {
  const n = seats.length
  const arr = [] // 表示有人的座位
  for (let i = 0; i < n; ++i) {
    if (seats[i] === 1) {
      arr.push(i)
    }
  }

  // 找最大间隔
  let maxDist = 0
  for (let i = 1; i < arr.length; ++i) {
    maxDist = Math.max(maxDist, arr[i] - arr[i - 1])
  }
  let res = Math.floor(maxDist / 2)
  if (seats[0] === 0) res = Math.max(res, arr[0]) // 坐第一个位置
  if (seats[n - 1] === 0) res = Math.max(res, n - 1 - arr[arr.length - 1]) // 坐最后一个位置
  return res
};

module.exports = maxDistToClosest