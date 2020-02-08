/**
 * 哈希
 * 
 * 时间：168ms
 * 空间：51.5MB
 */

// O(1)
var Logger = function() {
  this.lastTime = new Map(); // 字符串 => 上一次打印的时间戳
};

// O(1)
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  let shouldPrint = false;
  if (!this.lastTime.has(message) || this.lastTime.get(message) <= timestamp - 10) { // 如果没被打印过，或者早10秒之前打印过
    shouldPrint = true;
    this.lastTime.set(message, timestamp);
  }
  return shouldPrint;
};