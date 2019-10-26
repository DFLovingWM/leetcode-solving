/**
 * 数组（暴力）：设置两个数组，一个存放重叠1次的（低危），一个存放重叠2次的（高危）
 * 
 * 时间：O(N^2)，168ms
 * 空间：O(N)，43.7MB
 */
var MyCalendarTwo = function() {
  this.oneList = [] // 重叠1次
  this.twoList = [] // 重叠2次
};

MyCalendarTwo.prototype.book = function(newStart, newEnd) {
  // 检查重叠2次的，有冲突就失败
  for (const item of this.twoList) {
    if (newStart < item.end && newEnd > item.start) {
      return false
    }
  }

  // 检查重叠1次的，有冲突时将冲突区间加入重叠2次的
  for (const item of this.oneList) {
    if (newStart < item.end && newEnd > item.start) { // 如果有冲突，挑选出冲突区间
      let s = Math.max(item.start, newStart)
      let e = Math.min(item.end, newEnd)
      this.twoList.push(new Pair(s, e))
    }
  }
  this.oneList.push(new Pair(newStart, newEnd))
  return true
};

function Pair (start, end) {
  this.start = start
  this.end = end
}

module.exports = MyCalendarTwo