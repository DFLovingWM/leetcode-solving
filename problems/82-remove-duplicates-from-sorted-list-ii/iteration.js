/**
 * 迭代 + 计数
 */
var deleteDuplicates = function (head) {
  const newDummy = new ListNode()
  let p = newDummy
  let [prev, curr] = [null, head]
  let dup = 0

  while (curr) {
    if (prev === null || prev.val !== curr.val) { // 不同的数字
      if (dup === 1) { // 检查旧数字是否满足
        p.next = prev
        p = p.next
      }
      dup = 1
    } else { // 数字相同
      ++dup
    }

    [prev, curr] = [curr, curr.next]
  }
  // 别忘了检查最后一个数字
  if (dup === 1) {
    p.next = prev
    p = p.next
  }
  // 断开
  p.next = null

  return newDummy.next
};

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = deleteDuplicates