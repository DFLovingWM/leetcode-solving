/**
 * 排序 + DP + 二分查找
 */
var findMaxForm = function (words, M, N) {
  // 提前数好有多少个0、1
  words = words.map(word => {
    let one = 0, zero = 0
    for (const ch of word) {
      if (ch === '0') {
        ++zero
      } else if (ch === '1') {
        ++one
      }
    }
    return [zero, one]
  }).sort((A, B) => A[0] - B[0] || A[1] - B[1])

  const chosen = [[0, M, N]]
  for (const word of words) {
    const [zero, one] = word
    if (zero > M || one > N) continue // 该物品买不了

    const prev = chosen[bisectRight(chosen, zero, one)]
    if (prev[0] + 1 > chosen[chosen.length - 1][0]) {
      chosen.push([prev[0] + 1, prev[1] - zero, prev[2] - one])
    }
  }
  return chosen[chosen.length - 1][0]
};

function bisectRight (chosen, needZero, needOne) {
  let [left, right] = [0, chosen.length]
  while (left < right) {
    const mid = left + (right - left >> 1)
    if (chosen[mid][1] >= needZero && chosen[mid][2] >= needOne) { // 能买（满足条件）
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left - 1
}

module.exports = findMaxForm