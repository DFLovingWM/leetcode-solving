/**
 * 频次
 */
var countCharacters = function (words, chars) {
  const freqs = words.map(count)
  chars = count(chars)
  
  let res = 0
  for (let i = 0; i < words.length; ++i) {
    if (contain(chars, freqs[i])) {
      res += words[i].length
    }
  }
  return res
};

function count (word) {
  const res = new Map()
  for (const ch of word) {
    res.set(ch, (res.get(ch) || 0) + 1)
  }
  return res
}

function contain (A, B) {
  for (const key of B.keys()) {
    const a = A.get(key) || 0
    const b = B.get(key) || 0
    if (a < b) return false
  }
  return true
}

[
  [["cat","bt","hat","tree"], 'atach'],
  [["hello","world","leetcode"], 'welldonehoneyr'],
].forEach(input => {
  console.log(countCharacters(...input))
})