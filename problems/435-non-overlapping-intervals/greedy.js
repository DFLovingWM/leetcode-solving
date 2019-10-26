/**
 * 求最少删除 => 求最多不重叠区间
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) return 0

  intervals = intervals.slice().sort((a, b) => a[1] - b[1]) // 结束时间升序

  let count = 1
  let lastEnd = intervals[0][1]

  for (const [start, end] of intervals) {
    if (start >= lastEnd) { // 新的不重叠区间
      lastEnd = end // 更新lastEnd
      ++count // 计数+1
    }
  }

  return intervals.length - count
};

module.exports = eraseOverlapIntervals