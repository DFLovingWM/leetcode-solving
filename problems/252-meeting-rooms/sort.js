/**
 * 会议排序，然后对于每一个会议B来说，只需要看B跟前一个会议A是否有冲突即可
 * 时间：O(NlogN), 76ms
 */
var canAttendMeetings = function(intervals) {
  intervals = intervals.slice().sort((a, b) => a[0] - b[0]) // 开始时间升序

  for (let i = 1; i < intervals.length; ++i) {
    if (overlap(intervals[i - 1], intervals[i])) return false
  }
  return true
};

// 判断2个会议是否重叠
function overlap (A, B) {
  return A[1] > B[0] && A[0] < B[1]
}

module.exports = canAttendMeetings