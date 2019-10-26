/**
 * 3指针
 * 时间：O(N), 120ms
 */
var sortArrayByParityII = function(arr) {
  let lastEven = 0
  let lastOdd = 1
  let i = 0

  while (i < arr.length) {
    if (isEven(i)) { // 偶数位置上
      if (!isEven(arr[i])) { // 值是奇数 => 需要交换到奇数位置
        swap(arr, lastOdd, i)
        lastOdd += 2
      } else {
        ++i
      }
    } else { // 奇数位置
      if (isEven(arr[i])) { // 值是偶数 => 需要交换到偶数位置
        swap(arr, lastEven, i)
        lastEven += 2
      } else {
        ++i
      }
    }
  }
  
  return arr
};

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function isEven (n) {
  return (n & 1) === 0
}

module.exports = sortArrayByParityII