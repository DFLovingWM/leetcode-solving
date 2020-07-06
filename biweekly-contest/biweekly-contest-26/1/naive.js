/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let res = 0;
  let acc = 0;
  let prev = '';
  for (const ch of s) {
    if (ch === prev) {
      ++acc;
    } else {
      acc = 1;
      prev = ch;
    }
    res = Math.max(res, acc);
  }
  res = Math.max(res, acc);
  return res;
};

[
  'leetcode',
  'abbcccddddeeeeedcba',
  'triplepillooooow',
  'hooraaaaaaaaaaay',
  'tourist',
].forEach(s => {
  console.log(maxPower(s))
})