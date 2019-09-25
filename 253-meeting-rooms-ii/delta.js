/**
 * 快排 + delta
 * 时间：O(NlogN)，100ms
 */
var minMeetingRooms = function(intervals) {
  const arr = []
  for (const [from, to] of intervals) {
    arr.push(new Node(from, 1)) // 起点+1，因为需要增加会议室
    arr.push(new Node(to, -1)) // 终点-1，因为可以释放会议室
  }
  arr.sort((a, b) => {
    if (a.position !== b.position) return a.position - b.position // 位置优先（数轴）
    return a.delta < 0 ? -1 : b.delta < 0 ? 1 : 0 // 其次是-1优先，因为同一时间中，先释放、再增加，这样就能省会议室
  })

  let res = 0
  let acc = 0
  for (const { delta } of arr) {
    acc += delta
    res = Math.max(acc, res)
  }
  return res
};

function Node (position, delta) {
  this.position = position
  this.delta = delta
}

[
  [[0, 30],[5, 10],[15, 20]],
  [[7,10],[2,4]],
  [[13,15],[1,13]],
].forEach(intervals => {
  console.log(minMeetingRooms(intervals))
})