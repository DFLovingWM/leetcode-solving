/**
 * 排序法[96ms]：无视已有排序。将所有链表结点摘下来变成数组，然后重新排序，最后返回新链表
 * 假设链表结点总数为 N，则有：
 * - 时间复杂度：O(NlogN)
 * - 空间复杂度：O(N)
 */
function mergeKLists (lists) {
  let values = []

  for (const list of lists) {
    for (let p = list; p; p = p.next) {
      values.push(p.val)
    }
  }

  values.sort((a, b) => a - b) // 重新、从小到大排序

  // 构造新链表并返回
  const dummy = new ListNode()
  let p = dummy
  for (const value of values) {
    p.next = new ListNode(value)
    p = p.next
  }
  return dummy.next
}