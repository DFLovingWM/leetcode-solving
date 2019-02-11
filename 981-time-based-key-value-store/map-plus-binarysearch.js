function TimeMap () {
  this.map = new Map()
}

TimeMap.createNew = function () {
  return new TimeMap()
}

TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, [])
  }
  this.map.get(key).push({
    timestamp,
    value
  })
}

TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map.has(key)) {
    return ''
  }

  let arr = this.map.get(key)

  // Binary search
  let L = 0, R = arr.length - 1, M
  while (L < R) {
    let M = Math.floor((L + R) / 2), center = arr[M]
    if (timestamp === center.timestamp) {
      return center.value
    } else if (timestamp < center.timestamp) {
      R = M - 1
    } else {
      L = M + 1
    }
  }

  // Not exist, then find next smaller [timestamp]
  while (L >= 0 && arr[L].timestamp > timestamp) {
    --L
  }
  
  return L >= 0 ? arr[L].value : ''
}

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = Object.create(TimeMap).createNew()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */