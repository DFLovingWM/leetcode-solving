/**
 * 递归
 * 
 * 时间：`O(NlogN)`
 * 空间：`O(logN)`，因为每个递归层只用了O(1)空间
 */
module.exports = function (head) {
  return mergeSort(head)
}

function mergeSort (head) {
  if (!head || !head.next) return head
  
  // 递归
  let [head1, head2] = split(head)
  head1 = mergeSort(head1)
  head2 = mergeSort(head2)

  return merge(head1, head2)  
}

// 找分割点并分割
function split (head) {
  let [slow, fast] = [head, head] // 快慢指针

  while (fast) {
    fast = fast.next
    if (fast && fast.next) {
      fast = fast.next
      slow = slow.next
    }
  }

  const head2 = slow.next
  slow.next = null

  return [head, head2]
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