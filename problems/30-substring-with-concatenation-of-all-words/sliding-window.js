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
}

function split(s, wordLength) {
  const res = [];
  for (let i = 0; i < s.length; i += wordLength) {
    res.push(s.slice(i, i + wordLength));
  }
  return res;
}

/**
 * 滑动窗口
 * 时间：O(), 136ms
 */
function findSubstring(s, words) {
  const wordLength = words[0].length;
  const totalLength = wordLength * words.length;
  const wordFreq = MapUtil.getFreq(words);
  const res = [];

  // 不同偏移量作为不同“组”，组间没有任何关系
  for (let i = 0; i < wordLength; ++i) {
    // freq初始值
    const segments = split(s.slice(i, i + totalLength), wordLength);
    const freq = MapUtil.getFreq(segments);

    // Clinch: 每次滑动1个单词的长度，以复用freq
    for (let j = i; j + totalLength <= s.length; j += wordLength) {
      // 先判断
      if (MapUtil.equal(freq, wordFreq)) {
        res.push(j);
      }
      // 再偏移
      const oldWord = s.slice(j, j + wordLength);
      const newWord = s.slice(j + totalLength, j + totalLength + wordLength);
      MapUtil.incr(freq, newWord);
      MapUtil.decr(freq, oldWord);
    }
  }

  return res;
}

module.exports = findSubstring;
