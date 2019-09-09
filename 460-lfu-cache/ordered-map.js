const NOT_FOUND = -1

function MappedValue (key, value, count) {
  this.key = key
  this.value = value
  this.count = count
}

/**
 * 利用HashMap保持插入顺序的特点，降低寻找min的复杂度
 */
var LFUCache = function(capacity) {
  this.capacity = capacity
  this.map = new Map()
  this.countMap = new map()

  this.updateCountMap = function (mappedValue) {
    const { key, value, count } = mappedValue
    if (!this.countMap.has(key)) {
      this.countMap.set(key, )
    }
  };

  this.deleteMin = function () {
    for (const subMap of this.countMap) { // 取频率最少
      if (subMap.size > 0) {
        const delKey = subMap.keys().next().value // 相等时，取访问时间最远
        subMap.delete(delKey)
        return
      }
    }
  }
};

LFUCache.prototype.get = function(key) {
  if (!this.map.has(key)) {
    return NOT_FOUND
  }
  const target = this.map.get(key)
  ++target.count
  this.updateCountMap(target)
  return target.value
};

/**
 * 
 */
LFUCache.prototype.put = function(key, value) {
  if (this.capacity === 0) return

  if (!this.map.has(key) && this.capacity === this.map.size) {
    this.map.delete(key)
    this.updateCountMap
  }
};

// 测试
const cache = new LFUCache( 2 /* capacity (缓存容量) */ );
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回 1
cache.put(3, 3);    // 去除 key 2
cache.get(2);       // 返回 -1 (未找到key 2)
cache.get(3);       // 返回 3
cache.put(4, 4);    // 去除 key 1
cache.get(1);       // 返回 -1 (未找到 key 1)
cache.get(3);       // 返回 3
cache.get(4);       // 返回 4
