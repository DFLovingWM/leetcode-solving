/**
 * 索引排序 + delta
 * 时间：O(N + M) = O(M)，其中M为数字的范围（最大数字），100ms
 */
var minMeetingRooms = function(intervals) {
  const max = intervals.reduce((tmp, item) => Math.max(tmp, item[1]), 0)
  const deltaList = Array.from({ length: max + 1 }, () => 0) // 数字范围不确定，这里可能会爆
  for (const [from, to] of intervals) {
    ++deltaList[from]
    --deltaList[to]
  }

  let res = 0
  let acc = 0
  for (let i = 0; i <= max; ++i) {
    acc += deltaList[i]
    res = Math.max(res, acc)
  }
  return res
};

[
  [[0, 30],[5, 10],[15, 20]],
  [[7,10],[2,4]],
  [[13,15],[1,13]],
].forEach(intervals => {
  console.log(minMeetingRooms(intervals))
})