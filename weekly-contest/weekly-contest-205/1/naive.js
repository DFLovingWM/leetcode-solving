/**
 * 贪心
 */
var modifyString = function(s) {
  let res = '';

  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (ch !== '?') {
      res += ch;
      continue;
    }

    const forbid = new Set();
    if (i - 1 >= 0) {
      forbid.add(res[i - 1]);
    }
    if (i + 1 < s.length) {
      forbid.add(s[i + 1]);
    }
    for (const ch of 'abcdefghijklmnopqrstuvwxyz') {
      if (!forbid.has(ch)) {
        res += ch;
        break;
      }
    }
  }
  
  return res;
};