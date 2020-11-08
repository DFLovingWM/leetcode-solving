/**
 * 暴力
 */
var countSubstrings = function(s, t) {
  const S = getSubStrings(s);
  const T = getSubStrings(t);
  let res = 0;
  for (const [x, c] of S) {
    for (const n of getNeighbors(x)) {
      if (T.has(n)) {
        res += c * T.get(n);
      }
    }
  }
  return res;
};

function getSubStrings(s) {
  const res = new Map();
  const n = s.length;
  for (let i = 0; i < n; ++i) {
    for (let j = i; j < n; ++j) {
      const t = s.slice(i, j + 1);
      res.set(t, (res.get(t) || 0) + 1);
    }
  }
  return res;
}

function getNeighbors(s) {
  const res = [];
  for (let i = 0; i < s.length; ++i) {
    for (let j = 0; j < 26; ++j) {
      if (s[i].charCodeAt(0) - 'a'.charCodeAt(0) === j) continue;
      const ss = s.slice(0, i) + String.fromCharCode(97 + j) + s.slice(i + 1);
      res.push(ss);
    }
  }
  return res;
}

console.log(countSubstrings('a', 'a'))