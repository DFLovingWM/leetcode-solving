// ====================== 基础实现 ======================

// 寻找`arr`中，`x`插入的最左位置
function bisectLeft (arr, x) {
  let [left, right] = [0, arr.length]
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (x <= arr[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

// 寻找`arr`中，`x`插入的最右位置
function bisectRight (arr, x) {
  let [left, right] = [0, arr.length]
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (x < arr[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

// ====================== 应用 ======================

// `=== x`的最左元素
function findEqual (arr, x) {
  const i = bisectLeft(arr, x)
  if (i < arr.length && arr[i] === x) return i
  return -1
}

// `< x`的最近(右)元素
// 即：“刚好”小于x的元素，以下同理
function findLess (arr, x) {
  const i = bisectLeft(arr, x)
  if (i - 1 >= 0) return i - 1
  return -1
}

// `<= x`的最近(右)元素
function findLessOrEqual (arr, x) {
  const i = bisectRight(arr, x)
  if (i - 1 >= 0) return i - 1
  return -1
}

// `> x`的最近(左)元素
function findGreater (arr, x) {
  const i = bisectRight(arr, x)
  if (i < arr.length) return i
  return -1
}

// `>= x`的最近(左)元素
function findGreaterOrEqual (arr, x) {
  const i = bisectLeft(arr, x)
  if (i < arr.length) return i
  return -1
}

module.exports = {
  bisectLeft,
  bisectRight,
  findEqual,
  findLess,
  findLessOrEqual,
  findGreater,
  findGreaterOrEqual,
}
