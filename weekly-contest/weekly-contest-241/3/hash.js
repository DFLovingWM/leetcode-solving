function getFreq(arr) {
  const res = new Map();
  for (const n of arr) {
    res.set(n, (res.get(n) || 0) + 1);
  }
  return res;
}

/**
 * 用 Map 存储（频次）
 */
var FindSumPairs = function(nums1, nums2) {
  this.A = getFreq(nums1);
  this.B = getFreq(nums2);

  this.nums1 = nums1;
  this.nums2 = nums2;
};

/** 
 * 维护2个数据结构
 */
FindSumPairs.prototype.add = function(index, val) {
  const oldVal = this.nums2[index];
  const newVal = oldVal + val;

  this.nums2[index] = newVal;

  this.B.set(oldVal, this.B.get(oldVal) - 1);
  if (this.B.get(oldVal) === 0) {
    this.B.delete(oldVal);
  }
  this.B.set(newVal, (this.B.get(newVal) || 0) + 1);
};

/** 
 * 遍历 Map
 */
FindSumPairs.prototype.count = function(tot) {
  let res = 0;
  for (const [a, aCnt] of this.A) {
    if (this.B.has(tot - a)) {
      const bCnt = this.B.get(tot - a);
      res += aCnt * bCnt;
    }
  }
  return res;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */