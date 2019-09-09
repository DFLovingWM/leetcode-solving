const NOT_FOUND = -1

var LFUCache = function(capacity) {
  this.capacity = capacity
  this.map = new Map()
};

LFUCache.prototype.get = function(key) {
  return getAndRefresh(this.map, key)
};

LFUCache.prototype.put = function(key, value) {
  if (this.capacity === 0) return

  if (!this.map.has(key) && this.map.size === this.capacity) {
    // 找到频率最小(位置更靠前的)的：O(N)
    const minKey = Array.from(this.map.keys()).reduce((aKey, bKey) => {
      return this.map.get(bKey).count < this.map.get(aKey).count ? bKey : aKey
    })
    this.map.delete(minKey)
  }
  putAndRefresh(this.map, key, value)
};

function getAndRefresh (map, key) {
  if (!map.has(key)) {
    return NOT_FOUND
  }

  const target = map.get(key)
  ++target.count
  map.delete(key)
  map.set(key, target)
  return target.value
}

function putAndRefresh (map, key, value) {
  if (!map.has(key)) { // 插入
    map.set(key, {
      value,
      count: 1
    })
  } else { // 修改
    const target = map.get(key)
    ++target.count
    target.value = value
    map.delete(key)
    map.set(key, target)
  }
}


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
