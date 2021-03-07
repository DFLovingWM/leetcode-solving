/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
  const freq = new Map();
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  const map = new Map();
  for (const count of freq.values()) {
    map.set(count, (map.get(count) || 0) + 1);
  }

  const keys = Array.from(map.keys()).sort((a, b) => b - a);
  let res = 0;
  for (const key of keys) {
    if (map.get(key) === 1) continue;
    map.set()
  }
  return res;
};