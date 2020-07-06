/**
 * 哈希表
 * 
 * 时间：O(N), 92ms
 */
var isIsomorphic = function(s, t) {
  const n = s.length;
  const mapping = new Map(); // 记录当前的一对一映射（from => to）
  const tos = new Set(); // 快速判断是否多对一
  for (let i = 0; i < n; ++i) {
    if (mapping.has(s[i])) {
      if (mapping.get(s[i]) !== t[i]) return false; // 一对多，fail
    } else {
      if (tos.has(t[i])) return false; // 多对一，fail
      mapping.set(s[i], t[i]);
      tos.add(t[i]);
    }
  }
  return true;
};