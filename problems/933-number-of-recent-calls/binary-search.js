/**
 * 二分查找
 * 
 * 时间：296ms
 * 空间：`O(N)`, 56.8MB
 */

// O(1)
var RecentCounter = function() {
  this.arr = [];
};

// O(logN)
RecentCounter.prototype.ping = function(t) {
  this.arr.push(t);
  return this.arr.length - bisectLeft(this.arr, t - 3000);
};

// 二分查找：`>= target` 的第一个
function bisectLeft(arr, target) {
  let L = 0;
  let R = arr.length;
  while (L < R) {
    const M = L + (R - L >>> 1);
    if (target <= arr[M]) {
      R = M;
    } else {
      L = M + 1;
    }
  }
  return L;
}