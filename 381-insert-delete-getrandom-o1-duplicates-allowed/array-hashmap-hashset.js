/**
 * HashMap(value => HashSet of index) + 数组
 */
var RandomizedCollection = function() {
  this.getIndexes = new Map()
  this.arr = []
};

RandomizedCollection.prototype.insert = function(val) {
  const has = this.getIndexes.has(val)
  if (!has) {
    this.getIndexes.set(val, new Set())
  }
  this.getIndexes.get(val).add(this.arr.length)
  this.arr.push(val)
  return !has
};

RandomizedCollection.prototype.remove = function(val) {
  if (!this.getIndexes.has(val)) {
    return false
  }

  const indexSet = this.getIndexes.get(val)
  const deleteIndex = indexSet.keys().next().value
  const lastIndex = this.arr.length - 1

  if (deleteIndex === lastIndex) { // 删除的是尾元素
    this.arr.pop()
    indexSet.delete(deleteIndex)
    if (indexSet.size === 0) this.getIndexes.delete(val)
    return true
  }

  // 非尾元素删除，则需要交换
  indexSet.delete(deleteIndex)
  if (indexSet.size === 0) this.getIndexes.delete(val)
  const lastValue = this.arr[lastIndex];
  [this.arr[lastIndex], this.arr[deleteIndex]] = [this.arr[deleteIndex], this.arr[lastIndex]]
  this.arr.pop()
  this.getIndexes.get(lastValue).delete(lastIndex)
  this.getIndexes.get(lastValue).add(deleteIndex)

  return true
};

RandomizedCollection.prototype.getRandom = function() {
  const index = Math.floor(Math.random() * this.arr.length)
  return this.arr[index]    
};


// 测试
// 初始化一个空的集合。
var collection = new RandomizedCollection();

console.log(collection.insert(1)); // true [1]
console.log(collection.insert(1)); // false [1,1]
console.log(collection.insert(2)); // true [1,1,2]
console.log(collection.insert(1)); // false [1,1,2,1]
console.log(collection.insert(2)); // false [1,1,2,1,2]
console.log(collection.insert(2)); // false [1,1,2,1,2,2]

console.log(collection.remove(1)); // true []
console.log(collection.remove(2)); // true
console.log(collection.remove(2)); // true
console.log(collection.remove(2)); // true

console.log(collection.getRandom());
console.log(collection.getRandom());
console.log(collection.getRandom());
console.log(collection.getRandom());
console.log(collection.getRandom());
console.log(collection.getRandom());
console.log(collection.getRandom());
console.log(collection.getRandom());
