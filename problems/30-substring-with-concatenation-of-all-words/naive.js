const MapUtil = {
  getValue(map, key) {
    return map.get(key) || 0;
  },
  incrValue(map, key) {
    map.set(key, (map.get(key) || 0) + 1);
  }
}

function getFreq(words) {
  const res = new Map();
  for (const word of words) {
    MapUtil.incrValue(res, word);
  }
  return res;
}

/**
 * 暴力 + Map(频次)
 * 时间：O(N * M), 216ms
 */
var findSubstring = function(s, words) {
  const wordLength = words[0].length;
  const totalLength = wordLength * words.length;
  const wordFreq = getFreq(words);

  const res = [];
  for (let i = 0, limit = s.length - totalLength + 1; i < limit; ++i) {
    const f = new Map();
    let acc = '';

    let j;
    for (j = i; j < i + totalLength; ++j) {
      acc += s[j];
      if ((j - i + 1) % wordLength === 0) {
        MapUtil.incrValue(f, acc);
        // Map已经不相等，提前退出（时间优化）
        if (MapUtil.getValue(f, acc) > MapUtil.getValue(wordFreq, acc)) {
          break;
        }
        acc = '';
      }
    }

    // OK
    if (j === i + totalLength) {
      res.push(i);
    }
  }

  return res;
};

module.exports = findSubstring;
