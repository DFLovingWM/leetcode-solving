/**
 * 过程：
 * 1. HashMap数个数：O(N)
 * 2. 维护大小为K的小顶堆：O(NlogK) < O(NlogN)，满足题意
 * 
 * 时间：O(NlogK)，68ms
 * 空间：O(N), 38.5MB
 */
var topKFrequent = function(nums, K) {
  const count = counter(nums)

  const heap = []
  for (const item of count) {
    heapPush(heap, item)
    if (heap.length > K) {
      heapPop(heap)
    }
  }

  let ret = []
  while (heap.length) {
    const item = heapPop(heap)
    ret.push(item[0])
  }
  return ret
};

function counter (arr) {
  const countMap = new Map()
  for (const n of arr) {
    if (!countMap.has(n)) countMap.set(n, 0)
    countMap.set(n, countMap.get(n) + 1)
  }
  return countMap
}

function heapPush (heap, item) {
  let cur = heap.length
  heap.push(item)
  while (cur > 0) {
    let parent = Math.floor((cur - 1) / 2)
    if (heap[cur][1] < heap[parent][1]) {
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

    if (right < heap.length && heap[right][1] < heap[cur][1] && heap[right][1] < heap[left][1]) { // 如果右子结点存在、并且最小
      swap(heap, cur, right)
      cur = right
    } else if (left < heap.length && heap[left][1] < heap[cur][1]) { // (这个分支可以不考虑右子结点了)
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

// [
//   [[1,1,1,2,2,3], 2],
//   [[1], 1],
// ].forEach(input => {
//   console.log(topKFrequent(...input))
// })
