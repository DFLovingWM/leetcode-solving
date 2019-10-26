/**
 * Hash
 */
var calculateTime = function(keyboard, word) {
  const position = new Map()
  for (let i = 0; i < keyboard.length; ++i) {
    position.set(keyboard[i], i)
  }
  
  let last = 0
  let res = 0
  for (const ch of word) {
    res += Math.abs(position.get(ch) - last)
    last = position.get(ch)
  }
  return res
};

[
  ['abcdefghijklmnopqrstuvwxyz', 'cba'],
  ['pqrstuvwxyzabcdefghijklmno', 'leetcode']
].forEach(input => {
  console.log(calculateTime(...input))
})
