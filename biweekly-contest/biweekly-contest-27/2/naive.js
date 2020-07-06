/**
 * 找出s中所有长度为k的子串
 */
var hasAllCodes = function(s, k) {
  const set = new Set();
  let acc = '';
  for (let i = 0; i < s.length; ++i) {
    acc += s[i];
    if (acc.length === k) {
      set.add(acc);
      if (set.size === (1 << k)) {
        return true;
      }
      acc = acc.slice(1);
    }
  }
  return false;
};