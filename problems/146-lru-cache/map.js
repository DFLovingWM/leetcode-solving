/**
 * JS的Map本身维护了插入顺序，所以我们只需要额外维护访问顺序
 * 
 * 时间：312ms
 * 空间：59.5MB
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.map = new Map()
};

/** 
 * 获取元素并刷新key序
 */
LRUCache.prototype.get = function(key) {
  return getAndRefresh(this.map, key)
};

/** 
 * if 满了并且要增加
 *   删除头结点
 * 插入/修改元素并刷新key序
 */
LRUCache.prototype.put = function(key, value) {
  if (!this.map.has(key) && this.capacity === this.map.size) { // 要删除头元素
    const oldestKey = this.map.keys().next().value
    this.map.delete(oldestKey)
  }
  setAndRefresh(this.map, key, value)
};

// 插入/修改，并刷新key序
function setAndRefresh (map, key, value) {
  if (!map.has(key)) { // 如果不存在（增加）
    map.set(key, value)
  } else { // 如果已经存在（修改）
    map.delete(key)
    map.set(key, value)
  }
}

// 获取，并刷新key序
function getAndRefresh (map, key) {
  if (!map.has(key)) return -1

  const value = map.get(key)
  map.delete(key)
  map.set(key, value)
  return value
}
