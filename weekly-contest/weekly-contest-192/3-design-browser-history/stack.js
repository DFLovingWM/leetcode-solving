// O(1)
var BrowserHistory = function(homepage) {
  this.arr = [homepage];
  this.i = 0;
  this.length = 1;
};

// O(1)
BrowserHistory.prototype.visit = function(url) {
  // 清空当前之后的所有记录
  // 如果没有length变量，则需要O(N)了
  this.length = this.i + 1;
  // 加入
  this.arr[this.length++] = url;
  ++this.i;
};

// O(1)
BrowserHistory.prototype.back = function(steps) {
  this.i = Math.max(this.i - steps, 0);
  return this.arr[this.i];
};

// O(1)
BrowserHistory.prototype.forward = function(steps) {
  this.i = Math.min(this.i + steps, this.length - 1);
  return this.arr[this.i];
};