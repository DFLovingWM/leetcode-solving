/**
 * Map的O(N)解法，参考：
 * https://mp.weixin.qq.com/s/8JRBQU9_aBHPPTennxsQBQ
 */
var canConvert = function(str1, str2) {
  if (str1 === str2) return true // 直接相等了

  const mapping = new Map()

  for (let i = 0; i < str1.length; ++i) {
    let [a, b] = [str1[i], str2[i]]

    if (!mapping.has(a)) { // 还没使用过a，则建立映射
      mapping.set(a, b)
    } else if (mapping.get(a) !== b) { // 用过但a已经转化为非b字母，多映射则失败
      return false
    }
  }

  return Array.from(mapping.keys()).length < 26 // 看是否用完了所有字母
};

module.exports = canConvert