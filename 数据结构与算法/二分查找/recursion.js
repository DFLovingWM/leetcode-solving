function bisectLeft (arr, left, right, target) {
  if (left >= right) { // 叶子结点
    return left
  }

  let middle = left + Math.floor((right - left) / 2)
  let result
  if (target <= arr[middle]) {
    result = bisectLeft(arr, left, middle, target)
  } else {
    result = bisectLeft(arr, middle + 1, right, target)
  }
  return result
}

function bisectRight (arr, left, right, target) {
  if (left >= right) { // 叶子结点
    return left
  }

  let middle = left + Math.floor((right - left) / 2)
  let result
  if (target < arr[middle]) {
    result = bisectRight(arr, left, middle, target)
  } else {
    result = bisectRight(arr, middle + 1, right, target)
  }
  return result
}

module.exports = {
  bisectLeft,
  bisectRight
}
