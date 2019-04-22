/**
 * Keep removing 'abc' and check if it's empty finally.
 * O(K * N), [160ms]
 */
var isValid = function(string) {
  let index

  while ((index = string.indexOf('abc')) !== -1) {
    string = string.slice(0, index).concat(string.slice(index + 3))
  }

  return string.length === 0
};

[
  'aabcbc',
  'abcabcababcc',
  'abccba',
  'cababc',
  'aaaaaaaaa'
].forEach(input => {
  console.log(isValid(input))
})