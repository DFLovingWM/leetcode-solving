const LENGTH = {
  Year: 4,
  Month: 7,
  Day: 10,
  Hour: 13,
  Minute: 16,
  Second: 19
}

/**
 * 简单数组：多写少读
 * 
 * 时间：88ms
 * 空间：37.7MB
 */
var LogSystem = function () {
  this.logs = []
};

// O(1)
LogSystem.prototype.put = function (id, timestamp) {
  this.logs.push([id, timestamp])
};

// O(N)
LogSystem.prototype.retrieve = function (start, end, granularity) {
  const length = LENGTH[granularity]
  start = start.slice(0, length)
  end = end.slice(0, length)
  const res = this.logs.filter(log => {
    const t = log[1].slice(0, length)
    return t >= start && t <= end
  }).map(item => item[0])
  return res
};

module.exports = LogSystem