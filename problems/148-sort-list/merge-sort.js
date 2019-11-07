/**
 * 链表的迭代式归并排序
 * 
 * 时间：`O(NlogN)`, 124ms
 * 空间：`O(1),` 40.2MB
 */
function sortList (head) {
  let n = 0 // 链表长度
  for (let p = head; p; p = p.next) ++n

  const dummy = new ListNode('dummy')
  dummy.next = head

  for (let len = 1; len < n; len *= 2) {
    let tail = dummy // 用以拼接
    let curr = tail.next // 记录线段首结点

    while (curr) {
      const h1 = curr
      let h2 = split(h1, len)
      curr = split(h2, len)
      tail.next = merge(h1, h2) // 合并后，拼接到大链表
      while (tail.next) tail = tail.next
    }
  }

  return dummy.next
}

// 找分割点
function split (head, n) {
  for (let i = 1; head && i < n; ++i) head = head.next
  if (!head) return head

  const res = head.next
  head.next = null // 切割
  return res
}

// 合并2个有序链表
function merge (h1, h2) {
  const res = new ListNode('dummy')
  let p = res

  while (h1 && h2) {
    if (h1.val < h2.val) {
      p.next = h1
      h1 = h1.next
    } else {
      p.next = h2
      h2 = h2.next
    }
    p = p.next
  }

  if (h1) p.next = h1
  if (h2) p.next = h2

  return res.next
}

function ListNode (val) {
  this.val = val
  this.next = null
}