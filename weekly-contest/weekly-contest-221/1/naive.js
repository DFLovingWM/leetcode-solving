/**
 * 
 */
var halvesAreAlike = function(s) {
  const n = s.length;
  return getCount(s.slice(0, n / 2)) === getCount(s.slice(n / 2));
};

function getCount(s) {
  let res = 0;
  for (const ch of s) {
    if (/[aeiou]/i.test(ch)) {
      ++res;
    }
  }
  return res;
}
