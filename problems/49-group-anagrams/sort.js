/**
 * 异位词 => 排序后相等
 * 时间：O(N * KlogK), 226ms
 */
var groupAnagrams = function(words) {
  const map = new Map()
  for (const word of words) {
    const sortedWord = Array.from(word).sort().join('')
    if (!map.has(sortedWord)) {
      map.set(sortedWord, [])
    }
    map.get(sortedWord).push(word)
  }
  return Array.from(map.values())
};

module.exports = groupAnagrams