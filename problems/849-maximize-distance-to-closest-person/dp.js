/**
 * 求left与right，可以达到`O(N)`时间
 */
var maxDistToClosest = function (seats) {
  const n = seats.length
  const left = new Array(n).fill(0)
  const right = new Array(n).fill(0)

  left[0] = seats[0] === 1 ? 0 : Infinity
  for (let i = 1; i < n; ++i) {
    if (seats[i] === 0) {
      left[i] = left[i - 1] + 1
    }
  }

  right[n - 1] = seats[n - 1] === 1 ? 0 : Infinity
  for (let i = n - 2; i >= 0; --i) {
    if (seats[i] === 0) {
      right[i] = right[i + 1] + 1
    }
  }

  let maxDist = 0
  for (let i = 0; i < n; ++i) {
    if (seats[i] === 1) continue
    const dist = Math.min(left[i], right[i])
    if (dist > maxDist) {
      maxDist = dist
    }
  }
  return maxDist
};

module.exports = maxDistToClosest