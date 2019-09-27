function Node (snapId, value) {
  this.snapId = snapId
  this.value = value
}

/**
 * 二分查找：利用snapId递增的特性，对每个数字都建立一个patch数组
 * 
 * 假设有N个元素，K次调用，则复杂度为：
 * 时间：O(KlogK), 448ms
 * 空间：O(NK), 89.5MB
 */
var SnapshotArray = function(length) {
  this.snapId = 0
  this.snaps = Array.from({ length }, () => [new Node(this.snapId, 0)])
};

// O(1)
SnapshotArray.prototype.set = function(index, val) {
  const snaps = this.snaps[index]
  const lastSnap = snaps[snaps.length - 1]
  if (lastSnap.snapId === this.snapId) { // 已经存在该snapId，则修改
    lastSnap.value = val
  } else { // 新增最新值
    snaps.push(new Node(this.snapId, val))
  }
};

// O(1)
SnapshotArray.prototype.snap = function() {
  return this.snapId++
};

// 二分查找, O(logN)
SnapshotArray.prototype.get = function(index, snapId) {
  const snaps = this.snaps[index]

  let [left, right] = [0, snaps.length]

  while (left < right) {
    const middle = left + (right - left >> 1)
    if (snapId <= snaps[middle].snapId) {
      right = middle
    } else {
      left = middle + 1
    }
  }

  if (left >= snaps.length || snaps[left].snapId !== snapId) { // 如果snapId很大，或者该snapId没有存，则取其左边的
    --left
  }

  return snaps[left].value
};

const snapshotArr = new SnapshotArray(3); // 初始化一个长度为 3 的快照数组
snapshotArr.set(1,6);
snapshotArr.snap()
snapshotArr.snap()
snapshotArr.set(1,19);
snapshotArr.set(0,4);
console.log(snapshotArr.get(2,1)) 
console.log(snapshotArr.get(2,0)) 
console.log(snapshotArr.get(0,1)) // 0