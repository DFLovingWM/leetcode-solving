// Map常用工具
const MapUtil = {
  // 值加1
  incr(map, key) {
    map.set(key, (map.get(key) || 0) + 1);
  },

  // 值减1
  decr(map, key) {
    const val = map.get(key) || 0;
    if (val > 0) {
      map.set(key, val - 1);
      if (val - 1 === 0) {
        map.delete(key);
      }
    }
  },

  // 判断Map是否相等
  equal(map1, map2) {
    for (const [key, v1] of map1) {
      const v2 = map2.get(key) || 0;
      if (v2 !== v1) {
        return false;
      }
    }
    return true;
  },

  /**
   * 获取频次
   * 1. 对于单词：求字符频次
   * 2. 对于单词列表：求单词频次
   */
  getFreq(words) {
    const res = new Map();
    for (const word of words) {
      MapUtil.incr(res, word);
    }
    return res;
  }
};

module.exports = MapUtil;
