/**
 * 有序数组 + 二分查找（模拟Trie树）
 * 
 * 时间：1176ms
 * 空间：132MB
 */

// O(NlogN)
var StreamChecker = function (words) {
  this.words = words.map(reverseStr).sort()
  this.input = ''
};

// O(QlogN)
StreamChecker.prototype.query = function (letter) {
  this.input = letter + this.input

  let [left, right] = [0, this.words.length]
  for (let i = 0; i < this.input.length; ++i) {
    const ch = this.input[i]

    left = bisectLeft(i, this.words, ch, left, right)

    if (left === right || this.words[left][i] !== ch) { // left不满足，表示找不到 => 提前false
      return false
    } else if (i === this.words[left].length - 1) { // left满足且走到最后，表示left就是一个前缀 => 返回true
      return true
    }

    right = bisectRight(i, this.words, ch, left, right)
  }

  // 来到这里，表示还是没找到 => 返回false
  return false
};

// 反转字符串
function reverseStr (str) {
  let res = ''
  for (let i = str.length - 1; i >= 0; --i) {
    res += str[i]
  }
  return res
}

// 二分查找（左闭边界）
function bisectLeft (i, arr, x, left, right) {
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (x <= arr[mid][i]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

// 二分查找（右开边界）
function bisectRight (i, arr, x, left, right) {
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (x < arr[mid][i]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

module.exports = StreamChecker