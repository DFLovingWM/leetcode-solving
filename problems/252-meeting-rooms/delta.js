/**
 * 时间节点排序 + delta
 * 时间：O(NlogN), 95ms
 */
var canAttendMeetings = function(intervals) {
  const arr = []
  for (const [from, to] of intervals) {
    arr.push(new Node(from, 1), new Node(to, -1))
  }
  arr.sort((a, b) => {
    if (a.time !== b.time) return a.time - b.time
    return a.delta < 0 ? -1 : a.delta > 0 ? 1 : 0
  })

  let acc = 0
  for (const {delta} of arr) {
    acc += delta
    if (acc > 1) return false // 大于1，表示此刻同时有多于1个会议在进行 => 失败
  }
  return true
};

function Node (time, delta) {
  this.time = time
  this.delta = delta
}

module.exports = canAttendMeetings