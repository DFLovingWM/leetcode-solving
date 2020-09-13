/**
 * 
 */
var canConvertString = function(s, t, k) {
  if (s.length !== t.length) return false;

  // used[d] = k，表示距离为`d`的已使用的最大数字为`k`
  const used = new Map();
  for (let i = 0; i < s.length; ++i) {
    let d = diff(s[i], t[i]);
    if (d === 0) continue; // 不必

    let next
    if (!used.has(d)) { // 没用过
      next = d;
    } else { // 用过，则加26
      next = used.get(d) + 26;
    }

    if (next > k) return false; // 失败
    used.set(d, next);
  }
  return true;
};

function diff(a, b) {
  let res = b.charCodeAt(0) - a.charCodeAt(0);
  if (res < 0) {
    res += 26;
  }
  return res;
}
