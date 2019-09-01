/**
 * 将数组转化为堆
 * @param {Array<T>} 原数组
 * @returns {Array<T>} 堆（也是个数组）
 */
function heapify (arr) {
  let heap = []
  for (const item of arr) {
    heapPush(heap, item)
  }
  return heap
}

/**
 * 将新元素插入堆，并维护堆的不变性
 * @param {Array<T>} heap 堆
 * @param {T} item 新元素
 */
function heapPush (heap, item) {
  let cur = heap.length

  // 尾部加入
  heap.push(item)

  // 调整堆（新元素在尾部，所以是bottom-up）
  while (true) {
    if (cur === 0) { // 到达root了，调整完毕
      break
    }
    let parent = Math.floor((cur - 1) / 2)
    if (heap[cur] < heap[parent]) { // 比父结点要小，上位
      [heap[cur], heap[parent]] = [heap[parent], heap[cur]]
      cur = parent
    } else {
      break
    }
  }
}

/**
 * 弹出最小元素，并维护堆的不变性
 * @param {Array<T>} heap 堆
 * @returns {T} 最小元素
 */
function heapPop (heap) {
  let length = heap.length
  if (length === 0) {
    throw new Error('堆中无元素')
  }

  // 头尾元素交换，为的是让最小元素从尾巴弹出
  [heap[0], heap[length - 1]] = [heap[length - 1], heap[0]]
  const result = heap.pop()

  // 调整堆（新元素在头部，所以是top-down）
  let cur = 0
  while (true) {
    let left = cur * 2 + 1
    let right = left + 1

    // 注：这个条件分支安排得非常完美！！！
    if (right < heap.length && heap[right] < heap[cur] && heap[right] < heap[left]) { // 如果右子结点存在、并且最小
      [heap[right], heap[cur]] = [heap[cur], heap[right]]
      cur = right
    } else if (left < heap.length && heap[left] < heap[cur]) { // (这个分支可以不考虑右子结点了)
      [heap[left], heap[cur]] = [heap[cur], heap[left]]
      cur = left
    } else { // (这个分支可以不考虑右、左子结点了)
      break
    }
  }

  return result
}

/**
 * 堆排序：维护大小为K的最小堆
 * O(NlogK), 耗时：
 */
var findKthLargest = function(nums, k) {
  let heap = []
  for (const num of nums) {
    heapPush(heap, num)
    if (heap.length > k) {
      heapPop(heap)
    }
  }
  return heap[0]
};

[
  [[3,2,1,5,6,4], 1],
  [[3,2,1,5,6,4], 2],
  [[3,2,1,5,6,4], 3],
  [[3,2,1,5,6,4], 4],
].forEach(input => {
  console.log(findKthLargest(...input))
})
