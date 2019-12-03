/**
 * 先定位到左右边界所在的区间，再讨论是否将区间分割
 */
var removeInterval = function (intervals, toBeRemoved) {
  const n = intervals.length
  const [from, to] = toBeRemoved
  let i, j
  const mid = []

  // 定位到分界点所在的区间：
  // 左边界在`i`
  for (i = 0; i < n; ++i) {
    const [l, r] = intervals[i]
    if (from < r) break
  }
  // 右边界在`j`
  for (j = n - 1; j >= 0; --j) {
    const [l, r] = intervals[j]
    if (to > l) break
  }

  if (from > intervals[i][0]) {
    mid.push([intervals[i][0], from])
  }
  if (to < intervals[j][1]) {
    mid.push([to, intervals[j][1]])
  }

  return [...intervals.slice(0, i), ...mid, ...intervals.slice(j + 1)]
};

module.exports = removeInterval