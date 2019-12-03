/**
 * 中序遍历(进阶：为了不用额外空间，不要直接化为数组，而是用双指针遍历)
 * 跟在一个有序的数组中数频次的做法是一样的，都是双指针
 * 
 * 时间：`O(N)`, 92ms
 */
var findMode = function (root) {
  if (!root) return []

  let res = [], maxFreq = 0 // 答案以及对应的最大频率
  let cnt = 1 // 当前频率
  let prev = null, curr = null // 前后指针

  function inOrder (node) {
    if (!node) return

    inOrder(node.left)

    prev = curr
    curr = node
    if (prev && curr) {
      if (curr.val === prev.val) { // 与上一个数字相同 => 累加
        ++cnt
      } else { // 否则 => 更新答案并重置
        if (cnt > maxFreq) {
          maxFreq = cnt
          res = [prev.val]
        } else if (cnt === maxFreq) {
          res.push(prev.val)
        }
        cnt = 1
      }
    }

    inOrder(node.right)
  }

  inOrder(root)
  // 别忘了最后一个数字
  if (cnt > maxFreq) {
    res = [curr.val]
  } else if (cnt === maxFreq) {
    res.push(curr.val)
  }
  return res
};