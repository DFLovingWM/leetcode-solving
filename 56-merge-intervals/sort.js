/**
 * 按left排序，然后遍历即可
 */
var merge = function(intervals) {
  if (!intervals.length) return []

  intervals = intervals.slice().sort((a, b) => a[0] - b[0])

  const res = [intervals[0]]
  for (const interval of intervals.slice(1)) {
    const last = res[res.length - 1]
    if (canJoin(last, interval)) {
      res.push(join(res.pop(), interval))
    } else {
      res.push(interval)
    }
  }
  return res
};

function canJoin (A, B) {
  return !(A[1] < B[0] || B[1] < A[0])
}

function join (A, B) {
  const left = Math.min(A[0], B[0])
  const right = Math.max(A[1], B[1])
  return [left, right]
}

[
  [[1,3],[2,6],[8,10],[15,18]],
  [[1,4],[4,5]],
].forEach(arr => {
  console.log(merge(arr))
})