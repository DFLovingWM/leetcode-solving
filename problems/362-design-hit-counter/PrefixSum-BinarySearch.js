/**
 * 前缀和、二分查找
 * 
 * 时间：60ms
 * 空间：34.2MB
 */

// O(1)
var HitCounter = function () {
  this.arr = []; // 时间线。每个元素格式为：[number, count]
  this.prefix = [0]; // 前缀和
};

// O(1)
HitCounter.prototype.hit = function (t) {
  const arr = this.arr;
  const prefix = this.prefix;

  if (arr.length === 0 || arr[arr.length - 1][0] !== t) {
    arr.push([ t, 1 ]);
    prefix.push(prefix[prefix.length - 1] + 1);
  } else {
    ++arr[arr.length - 1][1];
    ++prefix[prefix.length - 1];
  }
};

// 二分查找（bisectRight）：O(logN)
HitCounter.prototype.getHits = function (t) {
  const arr = this.arr;
  const prefix = this.prefix;
  return prefix[le(arr, t) + 1] - prefix[gt(arr, t - 300)];
};

// ============================ 下面是工具函数 ============================

function bisectRight(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (target >= arr[mid][0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function gt(arr, target) {
  return bisectRight(arr, target);
}

function le(arr, target) {
  return bisectRight(arr, target) - 1;
}