/**
 * 直接串联[620ms]：
 * 每次取最小值的head，加到结果中，直到取到的head为空。需要注意一些null的判断。
 * 设有 K 个链表，结点总数为 N 个，则有：
 * - 时间复杂度：O(N * K)
 * - 空间复杂度：O(1)
 */
function mergeKLists (lists) {
  const dummy = new ListNode(-1)
  let tail = dummy

  while (true) {
    let minIndex = -1
    for (let i = 0; i < lists.length; ++i) {
      let node = lists[i]
      if (!node) continue
      if (minIndex === -1 || node.val < lists[minIndex].val) {
        minIndex = i
      }
    }
    if (minIndex !== -1) {
      // 移动那个list的指针
      const newNode = lists[minIndex]
      lists[minIndex] = lists[minIndex].next
      newNode.next = null
      // 串联到结果中
      tail.next = newNode
      tail = tail.next
    } else {
      break
    }
  }

  return dummy.next
}
