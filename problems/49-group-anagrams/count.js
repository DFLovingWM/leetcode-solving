/**
 * 单词 => count数组 => count字符串，作为map的key
 * O(NK)
 */
var groupAnagrams = function(words) {
  const map = new Map()
  for (const word of words) {
    const key = getCount(word)
    if (!map.has(key)) {
      map.set(key, [])
    }
    map.get(key).push(word)
  }
  return Array.from(map.values())
};

// O(K)
function getCount (word) {
  const LETTER_COUNT = 26
  const letterCount = Array.from({ length: LETTER_COUNT }, () => 0)
  for (const letter of word) {
    ++letterCount[letter.charCodeAt(0) - 'a'.charCodeAt(0)]
  }
  return letterCount.join(',') // 哈希化
}

module.exports = groupAnagrams