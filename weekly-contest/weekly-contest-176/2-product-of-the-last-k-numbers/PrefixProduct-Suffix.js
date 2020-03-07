/**
 * 前缀积：遇到0则重新开始（适用于后缀）
 * 
 * 时间：344ms
 * 空间：O(M) <= O(N), 90MB
 */

// O(1)
var ProductOfNumbers = function () {
  this.prefix = [1];
};

// O(1)
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.prefix = [1];
  } else {
    const back = this.prefix[this.prefix.length - 1];
    this.prefix.push(back * num);
  }
};

// O(1)
ProductOfNumbers.prototype.getProduct = function (k) {
  const n = this.prefix.length;
  if (k >= n) return 0;
  return this.prefix[n - 1] / this.prefix[n - 1 - k];
};