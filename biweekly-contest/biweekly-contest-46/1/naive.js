/**
 * 完全暴力
 */
var longestNiceSubstring = function(s) {
  const n = s.length;
  let res = '';
  for (let i = 0; i < n; ++i) {
    let sub = '';
    for (let j = i; j < n; ++j) {
      sub += s[j];
      if (isNice(sub) && sub.length > res.length) {
        res = sub;
      }
    }
  }
  return res;
};

function isNice(s) {
  const set = new Set();
  for (const ch of s) {
    set.add(ch);
  }
  for (const ch of s) {
    if (!set.has(getMirror(ch))) {
      return false;
    }
  }
  return true;
}

function getMirror(ch) {
  if (ch >= 'a' && ch <= 'z') {
    return ch.toUpperCase();
  }
  return ch.toLowerCase();
}