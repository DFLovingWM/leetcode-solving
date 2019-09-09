/**
 * Cheat
 */
var isMatch = function(s, p) {
  return new RegExp(`^${p}$`).test(s)
};

[
  ['aa', 'a'],
  ['aa', 'a*'],
  ['ab', '.*'],
  ['aab', 'c*a*b'],
  ['mississippi', 'mis*is*p*.']
].forEach(input => {
  console.log(isMatch(...input))
})