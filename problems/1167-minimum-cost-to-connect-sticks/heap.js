/**
 * 类似Huffman编码，使用小顶堆解决：
 * 时间：O(NlogN)
 */
var connectSticks = function(sticks) {
  const heap = []
  for (const stick of sticks) {
    heapPush(heap, stick)
  }

  let cost = 0
  while (true) {
    let a = heapPop(heap)
    let b = heapPop(heap)
    let sum = a + b
    cost += sum
    if (heap.length === 0) break
    heapPush(heap, sum)
  }
  return cost
};

function heapPush (heap, x) {
  heap.push(x)
  let cur = heap.length - 1
  while (cur > 0) {
    let parent = Math.floor((cur - 1) / 2) // 左右子结点都适用（记得取整）
    if (heap[cur] < heap[parent]) { // 更小，上位
      swap(heap, cur, parent)
      cur = parent
    } else { // 告辞
      break
    }
  }
}

function heapPop (heap) {
  let length = heap.length;
  swap(heap, 0, heap.length - 1)
  let result = heap.pop()
  let cur = 0
  while (true) {
    let left = cur * 2 + 1
    let right = left + 1
    if (right < heap.length && heap[right] < heap[left] && heap[right] < heap[cur]) {
      swap(heap, cur, right)
      cur = right
    } else if (left < heap.length && heap[left] < heap[cur]) {
      swap(heap, cur, left)
      cur = left
    } else { // 告辞
      break
    }
  }
  return result
}

function swap (heap, i, j) {
  [heap[i], heap[j]] = [heap[j], heap[i]]
}

// [
//   [2,4,3],
//   [1,8,3,5],
//   [3354,4316,3259,4904,4598,474,3166,6322,8080,9009],
// ].forEach(arr => {
//   console.log(connectSticks(arr))
// })
