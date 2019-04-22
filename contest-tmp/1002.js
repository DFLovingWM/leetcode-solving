/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(strings) {
  let counts = []
  let result = []

  for (const string of strings) {
    let count = new Map()
    for (const char of string) {
      count.set(char, (count.get(char) || 0) + 1)
    }
    counts.push(count)
  }

  for (const char of 'abcdefghijklmnopqrstuvwxyz') {
    let minCount = counts.reduce((res, count) => {
      return Math.min(res, (count.get(char) || 0))
    }, Infinity)
    while (minCount--) result.push(char)
  }

  return result
};

[
  ["bella","label","roller"],
  ["cool","lock","cook"]
].forEach(input => {
  console.log(commonChars(input))
})