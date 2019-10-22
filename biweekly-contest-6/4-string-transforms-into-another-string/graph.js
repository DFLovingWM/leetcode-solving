/**
 * Map的O(N)解法，参考：
 * https://mp.weixin.qq.com/s/8JRBQU9_aBHPPTennxsQBQ
 */
var canConvert = function(str1, str2) {
  if (str1 === str2) return true // 相等直接返回true

  const mapping = new Map() // 后继结点表
  for (let i = 0; i < str1.length; ++i) {
    const [a, b] = [str1[i], str2[i]]
    if (!mapping.has(a)) { // 还没使用过a，则建立映射
      mapping.set(a, b)
    } else if (mapping.get(a) !== b) { // 用过但a已经转化为非b字母，多映射则失败
      return false
    }
  }
  return Array.from(mapping.keys()).length < 5 // 看是否用完了26个字母
};

module.exports = canConvert