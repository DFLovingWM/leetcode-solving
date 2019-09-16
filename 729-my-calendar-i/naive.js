/**
 * 时间：O(N^2), 276ms
 * 空间：O(N), 43.2MB
 */
var MyCalendar = function() {
  this.intervals = []
};

MyCalendar.prototype.book = function(start, end) {
  const collision = this.intervals.some(([s, e]) => {
    return !(start >= e || end <= s)
  })
  if (collision) return false
  this.intervals.push([start, end])
  return true
};

module.exports = MyCalendar