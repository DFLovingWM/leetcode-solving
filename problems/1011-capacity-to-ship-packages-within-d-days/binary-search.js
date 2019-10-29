/**
 * 最小化最大值问题，二分枚举
 */
var shipWithinDays = function (weights, D) {
  let sum = 0, max = 0
  for (const weight of weights) {
    sum += weight
    max = Math.max(max, weight)
  }

  let L = max // 最小能力，也要承受起最重的行李
  let R = sum + 1 // 最大能力（开区间）：1天之内运输完所有行李即总和

  while (L < R) {
    const M = L + (R - L >> 1)

    if (check(weights, D, M)) {
      R = M
    } else {
      L = M + 1
    }
  }

  return L
};

function check (weights, D, capacity) {
  let count = 0
  let acc = 0

  for (const weight of weights) {
    if (acc + weight > capacity) { // 超过能力，需要放在另一趟
      ++count
      acc = weight
    } else {
      acc += weight
    }
  }
  if (acc > 0) ++count // 还有剩余的，再加一趟

  return count <= D
}

module.exports = shipWithinDays