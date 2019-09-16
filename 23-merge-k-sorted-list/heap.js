/**
 * 小顶堆：维护size <= K的小顶堆，每次弹出最小值
 * 
 * 时间：O(NlogK) < O(NlogN)
 */
var mergeKLists = function(lists) {
  const dummy = new ListNode()
  let p = dummy

  const heap = []
  for (let i = 0; i < lists.length; ++i) {
    if (lists[i]) { // 排除空结点
      heapPush(heap, lists[i])
    }
  }

  // 开始
  while (heap.length) {
    const newNode = heapPop(heap)
    p.next = newNode
    p = p.next
    if (newNode.next) {
      heapPush(heap, newNode.next)
    }
  }

  return dummy.next
};

function heapPush (heap, item) {
  let cur = heap.length
  heap.push(item)
  while (cur > 0) {
    let parent = Math.floor((cur - 1) / 2)
    if (heap[cur].val < heap[parent].val) {
      swap(heap, cur, parent)
      cur = parent
    } else {
      break
    }
  }
}

function heapPop (heap) {
  swap(heap, 0, heap.length - 1)
  const result = heap.pop()

  let cur = 0
  while (true) {
    let left = cur * 2 + 1
    let right = left + 1

    if (right < heap.length && heap[right].val < heap[cur].val && heap[right].val < heap[left].val) { // 如果右子结点存在、并且最小
      swap(heap, cur, right)
      cur = right
    } else if (left < heap.length && heap[left].val < heap[cur].val) { // (这个分支可以不考虑右子结点了)
      swap(heap, cur, left)
      cur = left
    } else { // (这个分支可以不考虑右、左子结点了)
      break
    }
  }

  return result
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
