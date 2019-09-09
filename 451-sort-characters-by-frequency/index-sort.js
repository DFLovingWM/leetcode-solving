/**
 * 索引排序
 * 时间：O(N), 128ms
 * 空间：O(N), 38.6MB
 */
var frequencySort = function(s) {
  const countMap = new Map()
  for (const ch of s) {
    countMap.set(ch, (countMap.get(ch) || 0) + 1)
  }

  const max = Math.max(...[...countMap.values()])
  const count2Char = Array.from({ length: max + 1 }, () => null)
  for (const [char, count] of countMap.entries()) {
    if (!count2Char[count]) count2Char[count] = []
    count2Char[count].push(char)
  }

  // 降序输出
  let res = ''
  for (let i = count2Char.length - 1; i >= 1; --i) {
    if (count2Char[i]) {
      for (const char of count2Char[i]) {
        res += char.repeat(i)
      }
    }
  }
  return res
};
