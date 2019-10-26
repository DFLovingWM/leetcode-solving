/**
 * 单词转化为count（Map），count相等则为“异位词”
 * O(N ^ 2 * K)，会TLE
 */
var groupAnagrams = function(words) {
  const length = words.length
  const visited = Array.from({ length }, () => false)
  const res = []

  words = words.map(word => getCount(word))

  for (let i = 0; i < length; ++i) {
    if (!visited[i]) {
      visited[i] = true
      const tmp = [words[i]]
      for (let j = 0; j < length; ++j) {
        if (i !== j && !visited[j] && isSame(words[i], words[j])) {
          visited[j] = true
          tmp.push(words[j])
        }
      }
      res.push(tmp)
    }
  }

  return res
};

function getCount (word) {
  const count = new Map()
  for (const ch of word) {
    if (!count.has(ch)) count.set(ch, 0)
    count.set(ch, count.get(ch) + 1)
  }
  return count
}

function isSame (A, B) {
  const aKeys = [...A.keys()]
  const bKeys = [...B.keys()]
  if (aKeys.length !== bKeys.length) return false
  return aKeys.every(key => A.get(key) === B.get(key))
}

module.exports = groupAnagrams