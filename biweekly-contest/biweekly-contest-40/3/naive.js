/**
 * 单操作接受`O(N)`时间
 */
var FrontMiddleBackQueue = function() {
  this.arr = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.arr.unshift(val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  this.arr.splice(this.arr.length >>> 1, 0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.arr.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  if (!this.arr.length) return -1;
  return this.arr.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if (!this.arr.length) return -1;
  const [res] = this.arr.splice(this.arr.length - 1 >>> 1, 1);
  return res;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  if (!this.arr.length) return -1;
  return this.arr.pop();
};
