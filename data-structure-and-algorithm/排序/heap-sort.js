/**
 * 堆排序
 */
function heapSort (arr) {
  buildHeap(arr)

  for (let i = arr.length - 1; i >= 1; --i) {
    let temp = arr[i]
    arr[i] = arr[0] // 位置0为最大值，(如果是顺序则)将它放到后面
    insert(arr, 0, i - 1, temp)
  }

  return arr
}

/**
 * 建堆
 */
function buildHeap (arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; --i) {
    insert(arr, i, arr.length - 1, arr[i])
  }
}

/**
 * 插入新元素(同时维护堆)
 * @param {Array<Number>} arr 数组
 * @param {Number} low 最小下标，该位置是个空位
 * @param {Number} high 最大下标，注意它是个有效下标
 * @param {Number} newElement 要插入的元素
 * @returns {void}
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