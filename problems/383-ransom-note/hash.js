/**
 * 哈希：B的频次包含A的频次即可
 */
var canConstruct = function (ransomNote, magazine) {
  const A = getFreq(ransomNote);
  const B = getFreq(magazine);
  for (const [ch, cnt] of A) {
    if (!B.has(ch) || B.get(ch) < cnt) {
      return false;
    }
  }
  return true;
};

function getFreq(s) {
  const res = new Map();
  for (const ch of s) {
    res.set(ch, (res.get(ch) || 0) + 1);
  }
  return res;
}