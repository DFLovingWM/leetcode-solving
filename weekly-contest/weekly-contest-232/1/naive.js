/**
 * true 的两种情况：
 * 1. 相同
 * 2. 相差 2 个字符，并且这俩字符互补
 */
var areAlmostEqual = function(s1, s2) {
  const n = s1.length;
  const diffIndex = [];

  for (let i = 0; i < n; ++i) {
    if (s1[i] !== s2[i]) {
      diffIndex.push(i);
    }
  }

  const d = diffIndex.length;
  if (d === 0) {
    return true;
  }
  if (d === 2) {
    const [a, b] = diffIndex;
    if (s1[a] === s2[b] && s1[b] === s2[a]) {
      return true;
    }
  }
  return false;
};