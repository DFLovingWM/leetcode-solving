/**
 * 维护有序数组
 * 
 * 时间：120ms
 * 空间：40.3MB
 */

// O(1)
var ExamRoom = function (N) {
  this.N = N
  this.arr = []
};

// O(N)
ExamRoom.prototype.seat = function () {
  if (this.arr.length === 0) {
    this.arr.push(0)
    return 0
  }

  // 找最大距离所在位置
  let maxDist = 0
  let res = 0
  for (let i = 1; i < this.arr.length; ++i) {
    const d = Math.floor((this.arr[i] - this.arr[i - 1]) / 2)
    if (d > maxDist) {
      maxDist = d
      res = this.arr[i - 1] + d
    }
  }

  // 坐开头
  let nearest = this.arr[0]
  if (nearest !== 0 && nearest >= maxDist) {
    maxDist = nearest
    res = 0
  }

  // 坐末尾
  nearest = this.arr[this.arr.length - 1]
  if (nearest !== this.N - 1 && this.N - 1 - nearest > maxDist) {
    maxDist = this.N - 1 - nearest
    res = this.N - 1
  }

  // 占据
  const i = bisectLeft(this.arr, res, 0, this.arr.length)
  this.arr.splice(i, 0, res)
  
  return res
};

// O(N)
ExamRoom.prototype.leave = function (p) {
  const index = this.arr.indexOf(p)
  this.arr.splice(index, 1)
};

// (无力的)二分
function bisectLeft (arr, x, left, right) {
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

module.exports = ExamRoom