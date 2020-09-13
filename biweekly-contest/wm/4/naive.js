/**
 * 1371
 */
var longestAwesome = function(s) {
  const minIndex = new Map();
  minIndex.set(0, -1);
  let acc = 0;
  let res = 0;

  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    acc ^= 1 << k(ch);
    if (minIndex.has(acc)) {
      res = Math.max(res, i - minIndex.get(acc));
    } else {
      minIndex.set(acc, i);
    }
  }

  return Math.min(
    res + 1,
    s.length
  );
};

function k(ch) {
  return Number(ch);
}