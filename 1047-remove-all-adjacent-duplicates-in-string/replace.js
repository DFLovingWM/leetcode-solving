/**
 * 一直调用replace(regExp)，直到字符串不变
 * 
 * 时间：O(N), 68ms
 * 空间：37.2MB
 */
var removeDuplicates = function(text) {
  let prev = text
  let curr

  while (true) {
    curr = prev.replace(/([a-z])\1/g, '') // 删除连续的2个小写字母
    if (curr === prev) break
    prev = curr
  }

  return curr
};
