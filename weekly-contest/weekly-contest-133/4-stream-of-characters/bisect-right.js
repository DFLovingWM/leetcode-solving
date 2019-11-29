/**
 * 一次二分查找
 * 
 * 时间：1008ms
 * 空间：125MB
 */

// O(NlogN + NM)
var StreamChecker = function (words) {
  // 排序、并筛选最小前缀
  const prefixes = []
  for (const word of words.map(reverseStr).sort()) {
    if (!prefixes.length || !word.startsWith(prefixes[prefixes.length - 1])) {
      prefixes.push(word)
    }
  }

  this.prefixes = prefixes
  this.input = ''
};

// O(logN)
StreamChecker.prototype.query = function (letter) {
  this.input = letter + this.input // 逆序
  const i = bisectRight(this.prefixes, this.input) - 1
  return i !== -1 && this.input.startsWith(this.prefixes[i])
};

// 反转字符串
function reverseStr (str) {
  let res = ''
  for (let i = str.length - 1; i >= 0; --i) {
    res += str[i]
  }
  return res
}

// 二分查找（右开界）
function bisectRight (arr, x) {
  let [left, right] = [0, arr.length]
  while (left < right) {
    const mid = left + (right - left >>> 1)
    if (x >= arr[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

module.exports = StreamChecker