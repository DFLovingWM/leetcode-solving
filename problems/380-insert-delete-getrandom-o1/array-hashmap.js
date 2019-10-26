/**
 * HashMap + Array(删除技巧)
 */
var RandomizedSet = function() {
  this.getIndex = new Map() // value => index。使“通过元素找到下标”时间达到O(1)
  this.arr = []
};

RandomizedSet.prototype.insert = function(val) {
  if (this.getIndex.has(val)) return false

  this.arr.push(val)
  this.getIndex.set(val, this.arr.length - 1)
  return true
};

RandomizedSet.prototype.remove = function(val) {
  if (!this.getIndex.has(val)) return false

  const index = this.getIndex.get(val) // 获取要删除元素A的下标
  const lastIndex = this.arr.length - 1
  this.getIndex.set(this.arr[lastIndex], index); // 调整原尾元素B的下标
  [this.arr[index], this.arr[lastIndex]] = [this.arr[lastIndex], this.arr[index]] // AB交换
  this.arr.pop() // 删除A
  this.getIndex.delete(val)
  return true
};

RandomizedSet.prototype.getRandom = function() {
  const index = Math.floor(Math.random() * this.arr.length)
  return this.arr[index]
};

// 测试
// const randomizedSet = new RandomizedSet()
// randomizedSet.insert(0)
// randomizedSet.insert(1)
// randomizedSet.remove(0)
// randomizedSet.insert(2)
// randomizedSet.remove(1)
// console.log(randomizedSet.getRandom())