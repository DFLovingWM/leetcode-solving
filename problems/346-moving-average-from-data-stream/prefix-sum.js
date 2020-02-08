/**
 * 前缀和
 * 
 * 时间：`O(1)`, 112ms
 * 空间：`O(N)`, 44.3MB
 */

// O(1)
var MovingAverage = function(size) {
  this.prefix = [0];
  this.size = size;
};

// O(1)
MovingAverage.prototype.next = function(val) {
  const prefix = this.prefix;
  prefix.push(prefix[prefix.length - 1] + val);
  const n = prefix.length;
  const size = Math.min(this.size, n - 1); // 实际窗口大小（一开始不足size）
  return (prefix[n - 1] - prefix[n - 1 - size]) / size;
};