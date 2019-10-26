/**
 * 每个单词使用hash记录count
 */
var commonChars = function(strings) {
  const ALPHA_RANGE = 'abcdefghijklmnopqrstuvwxyz'
  let hash = new Map()
  let result = []
  
  for (const char of ALPHA_RANGE) {
    hash.set(char, Infinity)
  }

  for (const string of strings) {
    let tmp = new Map()
    for (const char of string) {
      tmp.set(char, (tmp.get(char) || 0) + 1)
    }

    // Choose the min
    for (const char of ALPHA_RANGE) {
      hash.set(char, Math.min(hash.get(char), (tmp.get(char) || 0)))
    }
  }

  for (const char of ALPHA_RANGE) {
    let count = hash.get(char)
    if (count === 0 || count === Infinity) continue
    while (count--) result.push(char)
  }

  return result
};

[
  ["bella","label","roller"],
  ["cool","lock","cook"]
].forEach(input => {
  console.log(commonChars(input))
})