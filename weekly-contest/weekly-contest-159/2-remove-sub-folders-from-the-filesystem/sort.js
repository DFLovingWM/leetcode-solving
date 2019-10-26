/**
 * 排序，判断前缀
 * 
 * 时间：O(NlogN + NM)，M为文件夹平均长度, 188ms
 */
var removeSubfolders = function (folders) {
  folders.sort()

  let prev = folders[0] // 上一个母文件夹
  const res = [prev]

  for (const folder of folders.slice(1)) {
    if (!isPrefix(prev, folder)) {
      res.push(folder)
      prev = folder
    }
  }
  
  return res
};

// 判断A是否是B的母文件夹（前缀）
// 要注意'/a/b'和'/a/bc'这种，它们是兄弟关系，不是母子
function isPrefix (A, B) {
  A = A + '/'
  if (A.length >= B.length) return false

  for (let i = 0; i < A.length; ++i) {
    if (A[i] !== B[i]) return false
  }
  return true
}

module.exports = removeSubfolders