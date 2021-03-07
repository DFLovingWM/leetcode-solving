/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  let [l, r] = [0, s.length - 1];
  while (l < r && s[l] === s[r]) {
    const ch = s[l];
    while (s[l] === ch) ++l;
    while (s[r] === ch) --r;
  }
  return Math.max(0, r - l + 1);
};

[
  'ca',
  'cabaabac',
  'aabccabba'
].forEach(s => {
  console.log(minimumLength(s))
})