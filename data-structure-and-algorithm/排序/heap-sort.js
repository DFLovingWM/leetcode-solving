/**
 * 堆排序
 */
function heapSort (arr) {
  buildHeap(arr)

  for (let i = arr.length - 1; i >= 1; --i) { // n-1 次
    let temp = arr[i]
    arr[i] = arr[0] // 将最大值交换到最后
    insert(arr, 0, i - 1, temp) // 原尾元素参与堆维护：O(logN)
  }

  return arr
}

/**
 * 建堆
 * O(NlogN)
 */
function buildHeap (arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; --i) {
    insert(arr, i, arr.length - 1, arr[i])
  }
}

/**
 * 插入新元素(同时维护堆)
 * O(logN)
 */
function insert (arr, low, high, newElement) {
  let large = low * 2 + 1 // 此时low是空位

  while (large <= high) {
    if (large + 1 <= high && arr[large + 1] > arr[large]) ++large // 右child更大
    if (newElement < arr[large]) {
      arr[low] = arr[large] // arr[large]在三者中最大、所以将它往上推，此时large位置为空位
      low = large
      large = low * 2 + 1
    } else {
      break
    }
  }

  /*
   * 到达这里的情况有两种：
   * (1)在某一层中，newElement比left、right都要大，赋值到那个子树的root
   * (2)newElement太小了，low到达了叶子结点，也只能赋值到这里
   */
  arr[low] = newElement
}

module.exports = heapSort