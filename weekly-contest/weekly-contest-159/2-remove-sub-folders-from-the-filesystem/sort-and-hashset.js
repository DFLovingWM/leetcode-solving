/**
 * 排序，判断前缀
 * 
 * 时间：O(NlogN + NM)，M为文件夹平均长度, 212ms
 */
var removeSubfolders = function (folders) {
  folders.sort()

  const exist = new Set()

  for (const folder of folders) {
    let found
    // 判断所有前缀
    let from = 1
    let i
    while ((i = folder.indexOf('/', from)) !== -1) {
      const prefix = folder.slice(0, i)
      if (exist.has(prefix)) {
        found = true
        break
      }
      from = i + 1
    }
    if (!found) {
      exist.add(folder)
    }
  }

  return Array.from(exist)
};

module.exports = removeSubfolders