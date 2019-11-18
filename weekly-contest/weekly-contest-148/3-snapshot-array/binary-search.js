/**
 * 对每个数字进行非连续的快照存储，二分查找
 */

// 数组初始化
// O(N)
var SnapshotArray = function (length) {
  this.snapId = 0
  this.arr = Array.from({ length }, () => [[this.snapId, 0]]) // 元素格式为[snapId, val]
};

// 需要看下是新增还是修改
// O(1)
SnapshotArray.prototype.set = function (index, val) {
  const snaps = this.arr[index]
  const latest = snaps[snaps.length - 1]
  if (latest[0] === this.snapId) {
    latest[1] = val
  } else {
    snaps.push([this.snapId, val])
  }
};

// 版本号加1
// O(1)
SnapshotArray.prototype.snap = function () {
  return this.snapId++
};

// 二分查找
// O(logM)
SnapshotArray.prototype.get = function (index, snapId) {
  const snaps = this.arr[index]
  const i = bisectRight(snaps, snapId + 0.1, 0, snaps.length) - 1
  return snaps[i][1]
};

function bisectRight (snaps, snapId, left, right) {
  while (left < right) {
    const mid = left + (right - left >>> 1)
    if (snapId >= snaps[mid][0]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

module.exports = SnapshotArray