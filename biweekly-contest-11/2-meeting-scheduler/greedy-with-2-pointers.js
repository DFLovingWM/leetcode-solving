/**
 * 贪心(排序) + 双指针
 */
var minAvailableDuration = function (A, B, duration) {
  A.sort((a, b) => a[0] - b[0])
  B.sort((a, b) => a[0] - b[0])

  let [i, j] = [0, 0]
  while (i < A.length && j < B.length) {
    const t = getOverlay(A[i], B[j], duration)
    if (t.length) return t

    if (A[i][0] < B[j][0] || (A[i][0] === B[j][0] && A[i][1] < B[j][1])) {
      ++i
    } else {
      ++j
    }
  }

  return []
};

function getOverlay(A, B, duration) {
  const [a, b, c, d] = [...A, ...B].sort((a, b) => a - b)
  if ((A[1] - A[0]) + (B[1] - B[0]) - (d - a) >= duration) {
    return [b, b + duration]
  } else {
    return []
  }
}

module.exports = minAvailableDuration