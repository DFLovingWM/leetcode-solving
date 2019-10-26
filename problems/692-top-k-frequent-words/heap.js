/**
 * 题目疯狂暗示，用堆。并且用“最差堆”
 * 时间：O(NlogK), 136ms
 * 空间：O(N), 39.4MB
 */
var topKFrequent = function(words, k) {
  const countMap = new Map()
  for (const word of words) {
    countMap.set(word, (countMap.get(word) || 0) + 1)
  }

  const heap = []
  for (const item of countMap) {
    heapPush(heap, item)
    if (heap.length > k) {
      heapPop(heap)
    }
  }

  let answers = []
  while (heap.length) {
    const item = heapPop(heap)
    answers.push(item[0])
  }
  return answers.reverse() // 因为是小顶堆，所以这里需要反转一下
};

// 上位者为最小值：频次更小，字典序更大
function compare (a, b) {
  if (a[1] !== b[1]) return a[1] < b[1]
  return a[0] > b[0]
}

function heapPush (heap, x) {
  heap.push(x)
  let cur = heap.length - 1
  while (cur > 0) {
    let parent = Math.floor((cur - 1) / 2)
    if (compare(heap[cur], heap[parent])) {
      swap(heap, cur, parent)
      cur = parent
    } else {
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
    if (right < heap.length && compare(heap[right], heap[left]) && compare(heap[right], heap[cur])) {
      swap(heap, cur, right)
      cur = right
    } else if (left < heap.length && compare(heap[left], heap[cur])) {
      swap(heap, cur, left)
      cur = left
    } else {
      break
    }
  }
  return result
}

function swap (heap, i, j) {
  [heap[i], heap[j]] = [heap[j], heap[i]]
}

[
  [["i", "love", "leetcode", "i", "love", "coding"], 2],
  [["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4],
].forEach(input => {
  console.log(topKFrequent(...input))
})
