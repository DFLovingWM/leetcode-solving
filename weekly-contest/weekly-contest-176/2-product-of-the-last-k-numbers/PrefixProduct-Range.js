/**
 * 前缀积 + 二分查找（适用于任意区间）
 * 
 * 时间：348ms
 * 空间：O(N), 89.8MB
 */

// O(1)
var ProductOfNumbers = function () {
  this.prefix = [1]; // 前缀积
  this.zeroIndex = []; // 0的下标（有序数组） 
};

// O(1)
ProductOfNumbers.prototype.add = function (num) {
  const n = this.prefix.length;
  if (num === 0) {
    this.zeroIndex.push(n - 1);
    this.prefix.push(1);
  } else {
    const back = this.prefix[n - 1];
    this.prefix.push(back * num);
  }
};

// O(logN)
ProductOfNumbers.prototype.getProduct = function (k) {
  const n = this.prefix.length;
  
  // 先检测这段中是否存在0
  const l = ge(this.zeroIndex, n - k - 1);
  const r = lt(this.zeroIndex, n - 1);
  if (l <= r) return 0;

  // 如果不存在0
  return this.prefix[n - 1] / this.prefix[n - k - 1];
};

// 二分查找
function bisectLeft(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (target <= arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function ge(arr, target) {
  return bisectLeft(arr, target);
}

function lt(arr, target) {
  return bisectLeft(arr, target) - 1;
}