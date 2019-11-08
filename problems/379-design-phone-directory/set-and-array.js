/**
 * 集合 + 数组
 * 
 * 时间：148ms
 * 空间：44.6MB
 */

// O(N)
var PhoneDirectory = function (maxNumbers) {
  this.avails = []
  this.availSet = new Set()

  for (let i = 0; i < maxNumbers; ++i) {
    this.avails.push(i)
    this.availSet.add(i)
  }
};

// O(1)
PhoneDirectory.prototype.get = function () {
  if (this.avails.length === 0) return -1

  const res = this.avails.pop()
  this.availSet.delete(res)
  return res
};

// O(1)
PhoneDirectory.prototype.check = function (number) {
  return this.availSet.has(number)
};

// O(1)
PhoneDirectory.prototype.release = function (number) {
  if (this.availSet.has(number)) return

  this.availSet.add(number)
  this.avails.push(number)
};

module.exports = PhoneDirectory