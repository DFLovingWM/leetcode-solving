/**
 * [好题目！]
 * 分析：线性不允许，只能二分查找
 */
var findInMountainArray = function(target, mountainArr) {
  let length = mountainArr.length()

  // 找顶点
  let peakIndex
  let L = 0, R = length - 1
  while (L <= R) {
    let M = Math.floor((L + R) / 2)
    let middle = mountainArr.get(M)
    if (middle < mountainArr.get(M - 1)) {
      R = M - 1
    } else if (middle < mountainArr.get(M + 1)) {
      L = M + 1
    } else {
      peakIndex = M
      break
    }
  }

  // 省时间：如果顶点就是target
  if (mountainArr.get(peakIndex) === target) return peakIndex

  // 左右半段各进行一次[二分查找]
  let answer = binarySearch(target, mountainArr, 0, peakIndex)
  if (answer === -1) {
    answer = binarySearch(target, mountainArr, peakIndex + 1, length - 1)
  }
  return answer
};

function binarySearch (target, mountainArr, left, right) {
  let L = left, R = right

  while (L <= R) {
    let M = Math.floor((L + R) / 2)
    let m = mountainArr.get(M)

    if (m > target) {
      L = M + 1
    } else if (m < target) {
      R = M - 1
    } else {
      return M
    }
  }

  return -1
}

// 测试
class MountainArr {
  constructor (arr) {
    this.arr = arr
  }

  get (i) {
    return this.arr[i]
  }

  length () {
    return this.arr.length
  }
}

const data = require('./data.json');

[
  [3, new MountainArr([1,2,3,4,5,3,1])],
  [3, new MountainArr([0,1,2,4,2,1])],
  [450002, new MountainArr(data)],
].forEach(input => {
  console.log(findInMountainArray(...input))
})
