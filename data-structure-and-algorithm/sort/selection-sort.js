/**
 * 选择排序：每次选取最小的元素，放到较前面位置(swap)
 */
function selectionSort (arr) {
  for (let order = 0; order < arr.length - 1; ++order) {
    let min
    let minIndex = -1

    // 找最小元素(从order位置开始找，因为order之前都是排好序的)
    for (let i = order; i < arr.length; ++i) {
      if (minIndex === -1 || arr[i] < min) {
        minIndex = i
        min = arr[i]
      }
    }

    // 放到较前面的位置，通过swap
    [ arr[order], arr[minIndex] ] = [ arr[minIndex], arr[order] ]
  }

  return arr
}

module.exports = selectionSort