var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.ageMap = new Map();
  this.lastLevel = 1; // 最旧的层

  this.updateAgeMap = function (item) {
    const { key, use } = item;
    if (!this.ageMap.has(use)) {
      this.ageMap.set(use, new Map());
      this.lastLevel = use;
    }
    if (use > 1) {
      const oldLevelMap = this.ageMap.get(use - 1);
      oldLevelMap.has(key) && oldLevelMap.delete(key);
    }
    const currLevelMap = this.ageMap.get(use);
    currLevelMap.set(key, item);
  };
}

LFUCache.prototype.get = function (key) {
  if (!this.map.has(key) || !this.capacity) {
    return -1;
  }
  const { val, use } = this.map.get(key);
  const item = { key, val, use: use + 1 };
  this.map.set(key, item);
  this.updateAgeMap(item);
  return val;
};

LFUCache.prototype.put = function (key, value) {
  if (!this.capacity) {
    return;
  }
  let use = 1;
  if (this.map.has(key)) {
    ({ use } = this.map.get(key));
    use += 1;
  } else if (this.map.size === this.capacity) {
    let toBeDelKey;
    for (let use of this.ageMap.keys()) { // eslint-disable-line
      const currLevelMap = this.ageMap.get(use);
      if (currLevelMap.size) {
        toBeDelKey = currLevelMap.keys().next().value;
        currLevelMap.delete(toBeDelKey);
        break;
      }
    }
    this.map.delete(toBeDelKey);
  }

  const item = { key, val: value, use };
  this.map.set(key, item);
  this.updateAgeMap(item);
};
