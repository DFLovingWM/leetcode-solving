/**
 * Map
 */
const WORD = 'balon'
const COUNT = {
  'b': 1,
  'a': 1,
  'l': 2,
  'o': 2,
  'n': 1
}

var maxNumberOfBalloons = function(text) {
  const count = new Map()
  for (const ch of text) {
    count.set(ch, (count.get(ch) || 0) + 1)
  }

  let min = Infinity
  for (const ch of Object.keys(COUNT)) {
    min = Math.min(min, Math.floor((count.get(ch) || 0) / COUNT[ch]))
  }
  return min === Infinity ? 0 : min
};

console.log(maxNumberOfBalloons('balon'))